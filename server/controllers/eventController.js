import Event from "../models/Event.js";

// Create Event
export const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      price,
      image,
      address,
      startDate,
      endDate,
      location,
    } = req.body;

    const newEvent = await Event.create({
      title,
      description,
      category,
      price,
      image,
      address,
      startDate,
      endDate,
      location,
      organizer: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Event Created Successfully",
      event: newEvent,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// Get All Events
export const getAllEvents = async (req, res) => {
  try {

    const events = await Event.find()
      .populate("organizer", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};
// Get Single Event
export const getEventById = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id)
      .populate("organizer", "name email");

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      event,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};
// Update Event
export const updateEvent = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    // Only the organizer can update
    if (event.organizer.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Event Updated Successfully",
      event: updatedEvent,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};
// Delete Event
export const deleteEvent = async (req, res) => {
  try {

    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    // Only organizer can delete
    if (event.organizer.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }

    await event.deleteOne();

    res.status(200).json({
      success: true,
      message: "Event Deleted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};
// Find Nearby Events
export const getNearbyEvents = async (req, res) => {
  try {

    const { latitude, longitude, distance } = req.query;

    const events = await Event.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [
              Number(longitude),
              Number(latitude),
            ],
          },

          $maxDistance: Number(distance) || 5000,
        },
      },
    });

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};