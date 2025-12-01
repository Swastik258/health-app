import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function OrderList() {
  const apiPayment = process.env.REACT_APP_API_Payment;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  // 🔹 For cancel confirmation modal
  const [cancelTarget, setCancelTarget] = useState(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`${apiPayment}/orderList/${userId}`)
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, [userId, apiPayment]);

  // ✅ Cancel API call
  const confirmCancelOrder = async () => {
    if (!cancelTarget) return;

    try {
      await axios.post(`${apiPayment}/CancelOrder`, {
        orderId: cancelTarget.orderId,
      });
      alert("✅ Order canceled successfully.");

      // Refresh order list
      const res = await axios.get(`${apiPayment}/orderList/${userId}`);
      setOrders(res.data);
    } catch (err) {
      console.error("Error canceling order:", err);
      alert("⚠️ Failed to cancel order.");
    }

    setCancelTarget(null); // close modal
  };

  // ✅ View Details
  const handleViewDetails = (orderId) => {
    setDetailsLoading(true);
    axios
      .get(`${apiPayment}/userOrderDetails/${userId}/${orderId}`)
      .then((response) => {
        setSelectedOrder(response.data);
        setDetailsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
        setDetailsLoading(false);
      });
  };

  if (loading) {
    return <div className="text-center mt-4">Loading orders...</div>;
  }

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <h2 className="h2">Order History</h2>
      </div>

      <table className="table table-bordered table-hover text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>Order ID</th>
            <th>User Name</th>
            <th>Total Amount</th>
            <th>Currency</th>
            <th>Status</th>
            <th>Payment Status</th>
            <th>Recipient</th>
            <th>Order Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="8">No orders found</td>
            </tr>
          ) : (
            orders.map((order) => {
              const orderDate = new Date(order.orderDate);
              const now = new Date();
              const diffHours = (now - orderDate) / (1000 * 60 * 60);
              const canCancel =
                diffHours <= 24 &&
                order.status.toLowerCase() !== "dispatched" && order.paymentStatus.toLowerCase() !== "refunded" ;

              return (
                <tr key={order.orderId}>
                  <td>{order.paymentGatewayId}</td>
                  <td>{order.userName}</td>
                  <td>{order.totalAmount}</td>
                  <td>{order.currency.trim()}</td>
                  <td>{order.status}</td>
                  <td>{order.paymentStatus}</td>
                  <td>{order.recipientName}</td>
                  <td>{new Date(order.orderDate).toLocaleString()}</td>
                  <td className="d-flex gap-2 justify-content-center">
                    {canCancel && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => setCancelTarget(order)} // open confirm modal
                      >
                        Cancel Order
                      </button>
                    )}

                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleViewDetails(order.orderId)}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* 🔹 Order Details Modal */}
      {selectedOrder && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order Details</h5>
                <button
                  type="button"
                  className="btn-close dashboard"
                  onClick={() => setSelectedOrder(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Order ID:</strong>{" "}
                  {selectedOrder.paymentGatewayId}
                </p>
                <p>
                  <strong>Status:</strong> {selectedOrder.status}
                </p>
                <p>
                  <strong>Total:</strong> {selectedOrder.totalAmount}{" "}
                  {selectedOrder.currency.trim()}
                </p>
                <p>
                  <strong>Recipient:</strong>{" "}
                  {selectedOrder.recipientName}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(selectedOrder.orderDate).toLocaleString()}
                </p>

                <h6>Items</h6>
                <table className="table table-sm table-striped">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.orderItems &&
                      selectedOrder.orderItems.map((item) => (
                        <tr key={item.id}>
                          <td>{item.productName}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Cancel Confirmation Modal */}
      {cancelTarget && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger">Confirm Cancel</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setCancelTarget(null)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <p>
                  Are you sure you want to cancel order <br />
                  <strong>{cancelTarget.paymentGatewayId}</strong>?
                </p>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setCancelTarget(null)}
                >
                  No
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={confirmCancelOrder}
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderList;
