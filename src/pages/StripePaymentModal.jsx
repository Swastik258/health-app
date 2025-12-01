import React from "react";
import {
  Elements,
  useStripe,
  useElements,
  PaymentElement
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "./CartContext";

function CheckoutForm({ onClose, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handlePay = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      alert(error.message);
      setIsProcessing(false);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      onSuccess(paymentIntent.id);
      return;
    }

    setIsProcessing(false);
  };

  return (
    <form style={{ marginTop: "15px" }}>
      <PaymentElement options={{ layout: "tabs" }} />

      <button
        onClick={handlePay}
        disabled={isProcessing}
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          margin: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>

      <button
        onClick={onClose}
        disabled={isProcessing}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          margin: "5px",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Cancel
      </button>
    </form>
  );
}



export default function StripePaymentModal({ paymentData, onClose }) {

  // Hooks (must stay at the top — OK)
  const [paymentSuccessId, setPaymentSuccessId] = React.useState(null);
  const { clearCart } = useCart();

  if (!paymentData?.stripeClientSecret) return null;

  const stripePromise = loadStripe(paymentData.stripePublishableKey);
  const paymentUrl = process.env.REACT_APP_API_Payment;
  const callupdate = paymentUrl + "/UpdateStripePayment";

  // SUCCESS HANDLER
  const handleSuccess = async (paymentId) => {

    await fetch(callupdate, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentId }),
    });
    setPaymentSuccessId(paymentId);

    setTimeout(() => {
          clearCart();
    }, 2000);
  };


  const options = {
    clientSecret: paymentData.stripeClientSecret,
    appearance: { theme: "flat" },
    paymentMethodOrder: [
      "card",
      "google_pay",
      "apple_pay",
      "upi",
      "netbanking",
      "wallet",
    ],
  };

  return (
    <div>

      {/* SUCCESS POPUP */}
      {paymentSuccessId && (
        <div className="popup">
          <h3>Payment Successful 🎉</h3>
          <p>Payment ID: {paymentSuccessId}</p>

          <button
            onClick={onClose}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "10px 15px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* PAYMENT FORM */}
      {!paymentSuccessId && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm onClose={onClose} onSuccess={handleSuccess} />
        </Elements>
      )}
    </div>
  );
}
