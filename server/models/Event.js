import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Music",
        "Sports",
        "Food",
        "Workshop",
        "Market",
        "Comedy",
        "Festival",
        "Other",
      ],
    },

    price: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    interestedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },

      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },

  {
    timestamps: true,
  }
);
eventSchema.index({
  location: "2dsphere",
});
const Event = mongoose.model(
  "Event",
  eventSchema
);

export default Event;