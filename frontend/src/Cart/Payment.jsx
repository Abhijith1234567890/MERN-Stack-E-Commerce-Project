import { Link, useNavigate } from "react-router-dom";
import "../CartStyles/Payment.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import CheckoutPath from "./CheckoutPath";
import axios from '../../config/axiosInstance'
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Payment = () => {
  const orderItem = JSON.parse(sessionStorage.getItem("orderItem"));
  const { user } = useSelector((state) => state.user);
  const { shippingInfo } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const completePayment = async (amount) => {
    try {
      const { data: keyData } = await axios.get("/api/v1/getKey");
      const { key } = keyData;
      const { data: orderData } = await axios.post("/api/v1/payment/process", {
        amount,
      });
      const { order } = orderData;

      // Open Razorpay Checkout
      const options = {
        key,
        amount,
        currency: "INR",
        name: "ShopEasy",
        description: "Ecommerce Website Payment Transaction",
        order_id: order.id,
        handler: async function (response) {
          const { data } = await axios.post(
            "/api/v1/paymentVerification",
            response,
          );

          if (data.success) {
            navigate(`/paymentsuccess?reference=${data.reference}`);
          } else {
            alert("Payment verification Failed");
          }
        },
        prefill: {
          name: user.name,
          email: "user.email",
          contact: shippingInfo.phoneNumber,
        },
        theme: {
          color: "#0073ff",
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      toast.error(error.message, { position: "top-center", autoClose: 3000 });
    }
  };

  return (
    <>
      <PageTitle title="Payment Processing" />
      <Navbar />
      <CheckoutPath activePath={2} />
      <div className="payment-container">
        <Link to="/order/confirm" className="payment-go-back">
          Go Back
        </Link>
        <button
          className="payment-btn"
          onClick={() => completePayment(orderItem.total)}
        >
          Pay ({orderItem.total})/-
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
