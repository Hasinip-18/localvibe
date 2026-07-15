import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      <h2 className="logo">
        🌍 LocalVibe
      </h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/create-event">Create Event</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </div>

    </nav>
  );
};

export default Navbar;