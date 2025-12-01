import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Dashboard.css';

function Login() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const appId = process.env.REACT_APP_PROJECT_ID;
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (phone=="9003535461") {
        navigate('/verify-otp', { state: { phone: `${countryCode}${phone}` } });
      }
    try {
      // Replace this with your API URL
      // SendPhone2FATokenForLogin?PhoneNumber=%2B918867499206&ApplicationId=58c6ebe5-82b2-474e-9824-ecb45eae05db
      // VerifyPhone2FATokenForLogin?Token=00000&ApplicationId=58c6ebe5-82b2-474e-9824-ecb45eae05db&PhoneNumber=%2B918867499206
      
      const fullPhone = `${countryCode}${phone}`;
    const encodedPhone = encodeURIComponent(fullPhone);
    const fullUrl = `${apiUrl}/SendPhone2FATokenForLogin?PhoneNumber=${encodedPhone}&ApplicationId=${appId}`;

    const response = await axios.get(fullUrl); // POST with query params

      console.log(response.data);
      if (response.data.status) {
        navigate('/verify-otp', { state: { phone: fullPhone } });
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      setError('Error during login');
    }
  };

  return (
    <>
    <div className="d-flex flex-column min-vh-60">
  {/* Header Section */}
  <div className="text-center py-4">
    <h2 className="mb-1 h2">Sign In</h2>
    <p className="mb-0 fw-bolder">to continue to Stindr</p>
  </div>

  {/* Form Section */}
  <div className="container flex-grow-1 d-flex justify-content-center align-items-center">
    <div className="row w-100 justify-content-center">
      <div className="col-md-6 col-lg-5 bg-white p-4 rounded shadow-sm">
        <h5 className="mb-4 text-muted">
          Tap <span className="text-blue fw-bold">Continue</span> to get an
          <span className="text-blue fw-bold"> One Time Password</span> to help you use Stindr.
          <br/>Please enter your phone number.
        </h5>

        {/* Country Code + Phone Input */}
        <div className="input-group mb-3">
          <select
            className="form-select"
            style={{ maxWidth: '100px' }}
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+91">🇮🇳 +91</option>
            <option value="+61">🇦🇺 +61</option>
            <option value="+81">🇯🇵 +81</option>
            <option value="+49">🇩🇪 +49</option>
            <option value="+33">🇫🇷 +33</option>
            <option value="+86">🇨🇳 +86</option>
            <option value="+971">🇦🇪 +971</option>
            <option value="+92">🇵🇰 +92</option>
            <option value="+880">🇧🇩 +880</option>
            <option value="+966">🇸🇦 +966</option>
            <option value="+234">🇳🇬 +234</option>
            <option value="+27">🇿🇦 +27</option>
            <option value="+7">🇷🇺 +7</option>
            <option value="+82">🇰🇷 +82</option>
            <option value="+62">🇮🇩 +62</option>
            <option value="+855">🇰🇭 +855</option>
            <option value="+84">🇻🇳 +84</option>
            <option value="+63">🇵🇭 +63</option>
            <option value="+60">🇲🇾 +60</option>
            <option value="+65">🇸🇬 +65</option>
            <option value="+852">🇭🇰 +852</option>
            <option value="+39">🇮🇹 +39</option>
            <option value="+34">🇪🇸 +34</option>
            <option value="+351">🇵🇹 +351</option>
            <option value="+90">🇹🇷 +90</option>
            <option value="+55">🇧🇷 +55</option>
            <option value="+54">🇦🇷 +54</option>
            <option value="+52">🇲🇽 +52</option>
            <option value="+20">🇪🇬 +20</option>
          </select>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <div className="d-grid">
          <button className="btn btn-blue" onClick={handleLogin}>Login</button>
        </div>
        <div>I don't have account <a href="/register">Create New</a></div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Login;
