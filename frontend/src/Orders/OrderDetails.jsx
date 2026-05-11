import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import "../OrderStyles/OrderDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderDetails, removeErrors } from "../features/order/orderSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const OrderDetails = () => {
  const { orderId } = useParams();
  const { order, loading, error } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  console.log(order);

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
    if (error) {
      toast.error(error, { position: "top-center", autoClose: 3000 });
      dispatch(removeErrors());
    }
  }, [dispatch, error, orderId]);

  const {
    shippingInfo = {},
    orderItems = [],
    paymentInfo = {},
    orderStatus,
    totalPrice,
    itemPrice,
    taxPrice,
    shippingPrice,
    paidAt,
  } = order;

  const { address, city, state, country, pinCode, phoneNo } = shippingInfo;
  const paymentStatus =
    paymentInfo?.status === "succeeded" ? "Paid" : "Not Paid";
  const finalOrderStatus =
    paymentStatus === "Not Paid" ? "Cancelled" : orderStatus;
  const orderStatusClass =
    finalOrderStatus === "Delivered"
      ? "status-tag delivered"
      : `status-tag ${finalOrderStatus.toLowerCase()}`;
  const paymentStatusClass = `pay-tag ${paymentStatus === "Paid" ? "paid" : "not-paid"}`;

  return (
    <>
      <PageTitle title={orderId} />
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <div className="order-box">
          {/* Order Items Stable */}
          <div className="table-block">
            <h2 className="table-title">Order Items</h2>
            <table className="table-main">
              <thead>
                <tr>
                  <th className="head-cell">Image</th>
                  <th className="head-cell">Name</th>
                  <th className="head-cell">Quantity</th>
                  <th className="head-cell">Price</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item) => (
                  <tr key={item.product} className="table-row">
                    <td className="table-cell">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="item-img"
                      />
                    </td>
                    <td className="table-cell">{item.name}</td>
                    <td className="table-cell">{item.quantity}</td>
                    <td className="table-cell">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Shipping Info Table */}
          <div className="table-block">
            <h2 className="table-title">Shipping Info</h2>
            <table className="table-main">
              <tbody>
                <tr className="table-row">
                  <th className="table-cell">Address</th>
                  <td className="table-cell">
                    {address},{city},{state},{country}-{pinCode}
                  </td>
                </tr>
                <tr>
                  <th className="table-cell">Phone</th>
                  <td className="table-cell">{phoneNo}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Order Summary */}
          <div className="table-block">
            <h2 className="table-title">Order Summary</h2>
            <table className="table-main">
              <tbody>
                <tr className="table-row">
                  <th className="table-cell">Order Status</th>
                  <th className="table-cell">
                    <span className={orderStatusClass}>{finalOrderStatus}</span>
                  </th>
                </tr>
                <tr className="table-row">
                  <th className="table-cell">Payment</th>
                  <th className="table-cell">
                    <span className={paymentStatusClass}>{paymentStatus}</span>
                  </th>
                </tr>
                {paidAt && (
                  <tr className="table-row">
                    <th className="table-cell">Payed At</th>
                    <th className="table-cell">
                      {new Date(paidAt).toLocaleString()}
                    </th>
                  </tr>
                )}
                <tr className="table-row">
                  <th className="table-cell">Items Price</th>
                  <th className="table-cell">{itemPrice}/-</th>
                </tr>
                <tr className="table-row">
                  <th className="table-cell">Tax Price</th>
                  <th className="table-cell">{taxPrice}/-</th>
                </tr>
                <tr className="table-row">
                  <th className="table-cell">Shipping Price</th>
                  <th className="table-cell">{shippingPrice}/-</th>
                </tr>
                <tr className="table-row">
                  <th className="table-cell">Total Price</th>
                  <th className="table-cell">{totalPrice}/-</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default OrderDetails;
