import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./PaymentPopup.css";
import PaymentProcess from "./PaymentProcess";

export default function PaymentPopup({ onClose, features, productId }) {
  
 const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showPopup, setShowPopup] = useState(false);
  const [paymentData, setPaymentData] = useState(null);
  const paymentApi = process.env.REACT_APP_API_Payment;

  const [formData, setFormData] = useState({
    userId: localStorage.getItem("userId") || "",
    productId: productId,
    productQuantity: "1",
    productPrice: "100",
    totalAmount: 100,
    recipientName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `${paymentApi}/PlaceOrder`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      let data = await response.json();
      setPaymentData(data);
      setShow(false);
      setShowPopup(true);
      console.log("Order placed:", data);
      handleClose();
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  const handlePlaceOrder = () => {
  const user = localStorage.getItem("userId"); // or get from Redux/Context

  if (!user) {
    alert("Please log in to continue");
    // Optionally redirect:
    // navigate("/login");
    return;
  }

  // User is logged in → start payment process
  handleShow();
};

  return (
    <>
      {/* Button to open popup */}
      <label style={{ fontSize: "24px" }}>{formData.productPrice} ₹</label>
      <br/>
      <Button variant="primary" onClick={handlePlaceOrder}>
        Place Order
      </Button>

      <PaymentProcess
        show={showPopup}
        handleClose={() => setShowPopup(false)}
        paymentData={paymentData}
        formData={formData}
      />

      {/* Popup */}
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Place Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Recipient Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="recipientName"
                    value={formData.recipientName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
              />
            </Form.Group>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" variant="success" className="w-100">
              Submit Order
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
