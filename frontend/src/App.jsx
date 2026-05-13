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
import ForgotPassword from "./user/ForgotPassword";
import ResetPassword from "./user/ResetPassword";
import Cart from "./Cart/Cart";
import Shipping from "./Cart/Shipping";
import OrderConfirm from "./Cart/OrderConfirm";
import Payment from "./Cart/Payment";
import PaymentSuccess from "./Cart/PaymentSuccess";
import MyOrder from "./Orders/MyOrder";
import OrderDetails from "./Orders/OrderDetails";
import Dashboard from "./Admin/Dashboard";
import ProductList from "./Admin/ProductList";
import CreateProduct from "./Admin/CreateProduct";
import UpdateProduct from "./Admin/UpdateProduct";
import UsersList from "./Admin/UsersList";
import UpdateRole from "./Admin/UpdateRole";

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
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/shipping"
          element={<ProtectedRoute element={<Shipping />} />}
        />
        <Route
          path="/order/confirm"
          element={<ProtectedRoute element={<OrderConfirm />} />}
        />
        <Route
          path="/process/payment"
          element={<ProtectedRoute element={<Payment />} />}
        />
        <Route
          path="/paymentsuccess"
          element={<ProtectedRoute element={<PaymentSuccess />} />}
        />
        <Route
          path="/orders/user"
          element={<ProtectedRoute element={<MyOrder />} />}
        />
        <Route
          path="/order/:orderId"
          element={<ProtectedRoute element={<OrderDetails />} />}
        />

        {/* Admin Route */}
        <Route
          path="/admin/dashboard"
          element={<ProtectedRoute element={<Dashboard />} adminOnly={true} />}
        />
        <Route
          path="/admin/products"
          element={<ProtectedRoute element={<ProductList />} adminOnly={true} />}
        />
        <Route
          path="/admin/product/create"
          element={<ProtectedRoute element={<CreateProduct />} adminOnly={true} />}
        />
        <Route
          path="/admin/product/:updateId"
          element={<ProtectedRoute element={<UpdateProduct />} adminOnly={true} />}
        />
        <Route
          path="/admin/users"
          element={<ProtectedRoute element={<UsersList />} adminOnly={true} />}
        />
        <Route
          path="/admin/user/:userId"
          element={<ProtectedRoute element={<UpdateRole />} adminOnly={true} />}
        />
      </Routes>
      {isAuthenticated && <UserDashboard user={user} />}
    </Router>
  );
};

export default App;
