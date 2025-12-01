import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useContext  } from 'react';
import axios from 'axios';
import { TriageContext } from '../context/TriageContext';

const apiUrl = process.env.REACT_APP_API_URL;
const appId = '58c6ebe5-82b2-474e-9824-ecb45eae05db';

export default function VerifyOtp() {
  const { setTriageSections } = useContext(TriageContext);
  
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phone;

  const handleVerify = async () => {
    try {
      const encodedPhone = encodeURIComponent(phoneNumber);
      const url = `${apiUrl}/VerifyPhone2FATokenForLogin?Token=${otp}&ApplicationId=${appId}&PhoneNumber=${encodedPhone}`;
      const response = await axios.get(url);

      if (response.data.accessToken) {
        localStorage.setItem('token', response.data.accessToken); // Save token
        localStorage.setItem('userId', response.data.id); // Save token
        localStorage.setItem('userDetail', JSON.stringify(response.data)); // Save token
        fetchTriageSections();
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        alert(response.data.message || 'Invalid OTP');
      }
    } catch (err) {
      alert('Error verifying OTP');
    }
  };


  const fetchTriageSections = async () => {
    const token = localStorage.getItem('token'); // Must be a valid token string

    if (!token) {
      console.error("Token missing. User must be logged in.");
      return;
    }
    try {
      const response = await axios.get(`${apiUrl}/GetCountrySpecificTriage?IsoCode=GB`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }});
      if (response.data && Array.isArray(response.data)) {
        setTriageSections(response.data); // save to context + localStorage
      }
    } catch (error) {
      console.error("Failed to fetch triage sections", error);
    }
  };

  if (!phoneNumber) return <p>Invalid access. No phone number provided.</p>;

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
  {/* Header Section */}
  <div className="dashboard-header text-white text-center py-4  bg-blue">
    <h2 className="mb-1">Verify OTP</h2>
    <p className="mb-0">Secure your access to Stindr</p>
  </div>

  {/* OTP Form Section */}
  <div className="container flex-grow-1 d-flex justify-content-center align-items-center">
    <div className="row w-100 justify-content-center">
      <div className="col-md-6 col-lg-5 bg-white p-4 rounded shadow-sm">
        <h5 className="mb-3 text-muted">
          Enter the OTP sent to <span className="text-blue fw-bold">{phoneNumber}</span>
        </h5>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <div className="d-grid">
          <button className="btn btn-blue" onClick={handleVerify}>
            Verify & Login
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
