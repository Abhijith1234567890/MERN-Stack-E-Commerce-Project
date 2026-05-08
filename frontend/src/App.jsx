import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Resgister from "./user/Resgister";
import Login from "./user/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./features/user/userSlice";
import UserDashboard from "./user/UserDashboard";
import Profile from "./user/Profile";
import ProtectedRoute from "./componentStyles/ProtectedRoute";
import UpdateProfile from "./user/UpdateProfile";
import UpdatePassword from "./user/UpdatePassword";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadUser());
    }
  }, [dispatch]);
  console.log(isAuthenticated, user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/register" element={<Resgister />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route
          path="/profile/update"
          element={<ProtectedRoute element={<UpdateProfile />} />}
        />
        <Route
          path="/password/update"
          element={<ProtectedRoute element={<UpdatePassword />} />}
        />
      </Routes>
      {isAuthenticated && <UserDashboard user={user} />}
    </Router>
  );
};

export default App;
