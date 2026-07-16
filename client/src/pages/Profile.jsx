import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully!");
    navigate("/login");
  };

  return (
    <div className="profile-container">

      <div className="profile-card">

        <h1>👤 My Profile</h1>

        <p>
          <strong>Status:</strong>{" "}
          {token ? "Logged In ✅" : "Not Logged In ❌"}
        </p>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
};

export default Profile;