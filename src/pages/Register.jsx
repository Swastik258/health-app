import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Dashboard.css";

function Register() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const appId = process.env.REACT_APP_PROJECT_ID;
  const navigate = useNavigate();

  // Form states
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Same list from your login page
  const countryCodes = [
    { code: "+1", flag: "🇺🇸" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+91", flag: "🇮🇳" },
    { code: "+61", flag: "🇦🇺" },
    { code: "+81", flag: "🇯🇵" },
    { code: "+49", flag: "🇩🇪" },
    { code: "+33", flag: "🇫🇷" },
    { code: "+86", flag: "🇨🇳" },
    { code: "+971", flag: "🇦🇪" },
    { code: "+92", flag: "🇵🇰" },
    { code: "+880", flag: "🇧🇩" },
    { code: "+966", flag: "🇸🇦" },
    { code: "+234", flag: "🇳🇬" },
    { code: "+27", flag: "🇿🇦" },
    { code: "+7", flag: "🇷🇺" },
    { code: "+82", flag: "🇰🇷" },
    { code: "+62", flag: "🇮🇩" },
    { code: "+855", flag: "🇰🇭" },
    { code: "+84", flag: "🇻🇳" },
    { code: "+63", flag: "🇵🇭" },
    { code: "+60", flag: "🇲🇾" },
    { code: "+65", flag: "🇸🇬" },
    { code: "+852", flag: "🇭🇰" },
    { code: "+39", flag: "🇮🇹" },
    { code: "+34", flag: "🇪🇸" },
    { code: "+351", flag: "🇵🇹" },
    { code: "+90", flag: "🇹🇷" },
    { code: "+55", flag: "🇧🇷" },
    { code: "+54", flag: "🇦🇷" },
    { code: "+52", flag: "🇲🇽" },
    { code: "+20", flag: "🇪🇬" },
  ];

  // Send OTP
  const sendOtp = async () => {
    if (!phone.trim()) {
      setMessage("Please enter your phone number.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const fullPhone = `${countryCode}${phone}`;
      const encodedPhone = encodeURIComponent(fullPhone);
      const url = `${apiUrl}/SendPhoneVerificationTokenWhileRegistration?PhoneNumber=${encodedPhone}&ApplicationId=${appId}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status) {
        setOtpSent(true);
        setMessage("OTP sent successfully!");
      } else {
        throw new Error(data.reason || "Failed to send OTP.");
      }
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP and Register
  const verifyAndRegister = async () => {
    if (!otp.trim() || !firstName.trim() || !lastName.trim()) {
      setMessage("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const fullPhone = `${countryCode}${phone}`;
      const query = new URLSearchParams({
        FirstName: firstName,
        LastName: lastName,
        Phone: fullPhone,
        Country: "India",
        ApplicationId: appId,
        CreatedDate: new Date().toISOString(),
        Token: otp,
        ClientId: crypto.randomUUID(),
        Isocode: "IN",
        TimeZoneId: "Asia/Kolkata",
        TimeZone: "Asia/Kolkata",
        DeviceName: "Web Browser",
        DeviceOsType: navigator.platform,
        DeviceOsVersion: navigator.userAgent,
        AppVersion: "1.0",
      });

      const response = await fetch(
        `${apiUrl}/VerifyPhoneNumberwhileRegistration?${query}`,
        { method: "GET" }
      );

      const data = await response.json();
      if (data && data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("userId", data.id);
        localStorage.setItem("userDetail", JSON.stringify(data));

        navigate("/dashboard");
      } else {
        throw new Error("Verification failed. Please check your OTP.");
      }
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-60">
      {/* Header Section */}
      <div className="text-center py-4">
        <h2 className="mb-1 h2">Create Account</h2>
        <p className="mb-0 fw-bolder">to get started with Stindr</p>
      </div>

      {/* Form Section */}
      <div className="container flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="row w-100 justify-content-center">
          <div className="col-md-6 col-lg-5 bg-white p-4 rounded shadow-sm">
            {!otpSent ? (
              <>
                <h5 className="mb-4 text-muted">
                  Enter your phone number to receive an
                  <span className="text-blue fw-bold"> OTP </span> and register
                  on Stindr.
                </h5>

                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    style={{ maxWidth: "100px" }}
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-blue"
                    onClick={sendOtp}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send OTP"}
                  </button>
                </div>

                <div className="pt-3">
                  Already have an account? <a href="/login">Sign In</a>
                </div>
              </>
            ) : (
              <>
                <h5 className="mb-4 text-muted">
                  Enter your details and the OTP sent to your phone.
                </h5>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <div className="d-grid">
                  <button
                    className="btn btn-blue"
                    onClick={verifyAndRegister}
                    disabled={loading}
                  >
                    {loading ? "Verifying..." : "Verify & Register"}
                  </button>
                </div>
              </>
            )}

            {message && <div className="mt-3 alert alert-info">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
