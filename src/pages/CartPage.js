import React, { useState } from "react";
import { useCart } from "./CartContext";
import PaymentProcess from "../components/PaymentProcess"; // import this component
import StripePaymentModal from "./StripePaymentModal";
import PopupModal from "./PopupModal";

function CartPage() {
  const { cartItems, addToCart, removeFromCart, clearCart, removeItemCompletely } = useCart();
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [paymentData, setPaymentData] = useState(null); // ✅ store order/payment data
  const paymentApi = process.env.REACT_APP_API_Payment;
const [showPaymentTypePopup, setShowPaymentTypePopup] = useState(false);
const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
const [showStripePopup, setShowStripePopup] = useState(false);
let currencyV = cartItems[0]?.currency;
currencyV = currencyV === "INR" ? "IN" : currencyV;
 //console.log(currencyV);
  const [formData, setFormData] = useState({
    userId: localStorage.getItem("userId") || "",
    recipientName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
    phone: "",
    currencyType: currencyV,
  });

  // 🔹 Handle input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // 🔹 Validate before placing order
  const validateForm = () => {
    const newErrors = {};
    if (!formData.recipientName.trim()) newErrors.recipientName = "Recipient name is required";
    if (!formData.addressLine1.trim()) newErrors.addressLine1 = "Address Line 1 is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.currencyType || formData.currencyType.trim() === "") {
      newErrors.currencyType = "Currency is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 When "Place Order" clicked
  const handlePlaceOrderClick = async () => {
  if (!validateForm()) { alert("⚠️ Please fill all required fields before placing order."); return; }

  // If all required fields are valid → open payment selection popup
  setShowPaymentTypePopup(true);
  
  };

  const handleClosePayment = () => {
    setShowPaymentPopup(false);
    clearCart(); // optional: clear cart after payment
  };




const handlePaymentMethodSelect = async (method) => {
  setSelectedPaymentMethod(method);
  setShowPaymentTypePopup(false);

  const orderPayload = {
    ...formData,
    items: cartItems.map((item) => ({
      productId: item.id,
      productName: item.name,
      productPrice: item.price,
      productQuantity: item.quantity,
    })),
  };

  try {
    setLoading(true);

    let endpoint =
      method === "razorpay"
        ? `${paymentApi}/PlaceOrder`
        : `${paymentApi}/PlaceOrderStripe`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderPayload),
    });

    if (!res.ok) throw new Error(`Order failed. Status: ${res.status}`);

    const data = await res.json();
    setPaymentData(data);


    // For Stripe open your Stripe modal or page
    if(method === "razorpay"){
      setShowPaymentPopup(true);
    }else{
// For Stripe payment here
setShowStripePopup(true);
    }

  } catch (error) {
    console.error(error);
    alert("Payment failed. Try again.");
  } finally {
    setLoading(false);
  }
};




  if (cartItems.length === 0) {
    return  (
    <div
    style={{
      height: "70vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <h2>Your cart is empty.<br/>Add some products to continue.</h2>
  </div>
  );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {/* ✅ Form */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h4>Delivery Information</h4>
        <div style={{ display: "grid", gap: "10px" }}>
          {[
            { name: "recipientName", label: "Recipient Name *" },
            { name: "addressLine1", label: "Address Line 1 *" },
            { name: "addressLine2", label: "Address Line 2" },
            { name: "city", label: "City *" },
            { name: "state", label: "State *" },
            { name: "zipCode", label: "ZIP Code *" },
            { name: "phone", label: "Phone Number *" },
          ].map(({ name, label }) => (
            <div key={name}>
              <input
                name={name}
                placeholder={label}
                value={formData[name]}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: errors[name] ? "1px solid red" : "1px solid #ccc",
                }}
              />
              {errors[name] && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {errors[name]}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🛒 Cart items */}
      <ul style={{ listStyle: "none", padding: 0 }}>
  {cartItems.map((item) => (
    <li
      key={item.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #ccc",
        padding: "10px 0",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "60px", height: "60px", objectFit: "cover" }}
      />

      <div style={{ flex: 1, marginLeft: "15px" }}>
        <h4 style={{ margin: 0 }}>{item.name}</h4>
        <p style={{ margin: 0 }}>{item.currency}: {item.price}</p>

        {/* 🔸 Quantity Controls */}
        <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              padding: "5px 10px",
              fontSize: "16px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            ➖
          </button>

          <span style={{ fontSize: "16px", fontWeight: "bold" }}>
            {item.quantity}
          </span>

          <button
            onClick={() => addToCart(item)}
            style={{
              padding: "5px 10px",
              fontSize: "16px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            ➕
          </button>

          {/* 🔥 Delete item completely */}
          <button
            onClick={() => removeItemCompletely(item.id)}
            style={{
              padding: "5px 10px",
              marginLeft: "15px",
              background: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            🗑 Delete
          </button>
        </div>
      </div>

      <strong>{item.currency} {(item.price * item.quantity).toFixed(2)}</strong>
    </li>
  ))}
</ul>


      {/* ✅ Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handlePlaceOrderClick}
          disabled={loading}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          {loading ? "Processing..." : "Place Order"}
        </button>

        <button
          onClick={clearCart}
          style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
          }}
        >
          Clear Cart
        </button>
      </div>

      {/* ✅ Razorpay Payment Modal */}
      {showPaymentPopup && paymentData && (
        <PaymentProcess
          show={showPaymentPopup}
          handleClose={handleClosePayment}
          paymentData={paymentData}
          formData={formData}
        />
      )}

      {showPaymentTypePopup && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}
  >
    <div
      style={{
        backgroundColor: "#fff",
        padding: "25px",
        borderRadius: "10px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <h3>Select Payment Method</h3>

      <button
        onClick={() => handlePaymentMethodSelect("razorpay")}
        style={{
          width: "100%",
          padding: "10px",
          background: "#3399ff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Razorpay
      </button>

      <button
        onClick={() => handlePaymentMethodSelect("stripe")}
        style={{
          width: "100%",
          padding: "10px",
          background: "#6772e5",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Stripe
      </button>
    </div>
  </div>
)}

{showStripePopup && paymentData && (
  <PopupModal onClose={() => setShowStripePopup(false)}>
    <StripePaymentModal
      paymentData={paymentData}
      onClose={() => setShowStripePopup(false)}
    />
  </PopupModal>
)}



    </div>
  );
}

export default CartPage;
