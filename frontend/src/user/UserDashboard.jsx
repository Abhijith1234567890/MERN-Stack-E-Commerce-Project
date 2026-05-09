import { useNavigate } from "react-router-dom";
import "../UserStyles/UserDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logout, removeSuccess } from "../features/user/userSlice";
import { useState } from "react";

const UserDashboard = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  function toggelMenu() {
    setMenuVisible(!menuVisible);
  }
  const options = [
    { name: "Orders", funcName: orders },
    { name: "Account", funcName: profile },
    { name: `Cart${cartItems.length}`, funcName: myCart, isCart: true },
    { name: "Logout", funcName: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      name: "Admin Dashboard",
      funcName: dashboard,
    });
  }

  function orders() {
    navigate("/orders/user");
  }
  function profile() {
    navigate("/profile");
  }
  function myCart() {
    navigate("/cart");
  }
  function logoutUser() {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success("Logout successful", {
          position: "top-center",
          autoClose: 3000,
        });
        dispatch(removeSuccess());
        navigate("/login");
      })
      .catch((error) => {
        toast.success(error.message || "Logout Failde", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  }
  function dashboard() {
    navigate("/admin/dashboard");
  }

  return (
    <>
      <div
        className={`overlay ${menuVisible ? "show" : ""}`}
        onClick={toggelMenu}
      ></div>
      <div className="dashboard-container">
        <div className="profile-header" onClick={toggelMenu}>
          <img
            src={user.avatar.url ? user.avatar.url : "./images/profile.png"}
            alt="Profile Picture"
            className="profile-avatar"
          />
          <span className="profile-name">{user.name}</span>
        </div>
        {menuVisible && (
          <div className="menu-options">
            {options.map((option) => (
              <button
                key={option.name}
                className={`menu-option-btn ${option.isCart ? (cartItems.length > 0 ? "cart-not-empty" : "") : ""}`}
                onClick={option.funcName}
              >
                {option.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserDashboard;
