import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const PaymentProcess = ({ show, handleClose, paymentData, formData }) => {
  const paymentApi = process.env.REACT_APP_API_Payment;
  const [showFinal, setShowFinal] = useState(false);
  const [payId, setPayId] = useState(null);

  useEffect(() => {
    if (show) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        console.log("Razorpay script loaded");
      };
      document.body.appendChild(script);
    }
  }, [show]);

  const openRazorpay = () => {
    if (!paymentData || !window.Razorpay) return;

    const options = {
      key: paymentData.razorpayKey,
      amount: paymentData.amount,
      currency: "INR",
      name: formData.recipientName,
      description: "Order Payment",
      order_id: paymentData.razorpayOrderId,

      handler: async function (paymentResponse) {
        try {
          const res = await fetch(`${paymentApi}/VerifyPayment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpayPaymentId: paymentResponse.razorpay_payment_id,
              razorpayOrderId: paymentResponse.razorpay_order_id,
              razorpaySignature: paymentResponse.razorpay_signature,
              orderId: paymentData.orderId,
            }),
          });

          const data = await res.json();

          if (data.status === "success") {
            setShowFinal(true);
            setPayId(data.data);
          } else {
            alert("Payment verification failed");
          }
        } catch (err) {
          console.error("Error verifying payment:", err);
          alert("Something went wrong while verifying payment");
        }
      },

      prefill: {
        name: formData.recipientName,
        user_id: formData.userId,
        contact: formData.phone,
      },

      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      {showFinal ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Payment Completed</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Your payment is successfully completed and your payment ID is</strong> {payId}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title>Complete Your Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Order ID:</strong> {paymentData?.razorpayOrderId}</p>
            <p><strong>Amount:</strong> ₹{paymentData?.amount}</p>
            <p><strong>Currency:</strong> {paymentData?.currency}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={openRazorpay}>
              Pay Now
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default PaymentProcess;
