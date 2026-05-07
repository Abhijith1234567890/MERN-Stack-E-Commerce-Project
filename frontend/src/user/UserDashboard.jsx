import { useNavigate } from "react-router-dom";
import "../UserStyles/UserDashboard.css";

const UserDashboard = ({ user }) => {
  const navigate = useNavigate()
  const options = [
    { name: "Orders", funcName: orders },
    { name: "Account", funcName: profile },
    { name: "Logout", funcName: logout },
  ];

  function orders() {
    navigate("/orders/user")
  }
  function profile() {
    navigate("/profile")
  }
  function logout() {
    console.log("Logout");
    
  }
  return (
    <div className="dashboard-container">
      <div className="profile-header">
        <img
          src={user.avatar.url ? user.avatar.url : "./images/profile.png"}
          alt="Profile Picture"
          className="profile-avatar"
        />
        <span className="profile-name">{user.name}</span>
      </div>
      <div className="menu-options">
        {options.map((option) => (
          <button className="menu-option-btn">{option.name}</button>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
