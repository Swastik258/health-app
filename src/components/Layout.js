import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import "./Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  FaHeartbeat,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaSignInAlt,
  FaTachometerAlt,
  FaBars,
} from "react-icons/fa";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check login token
  const checkToken = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  // ✅ On mount + on route change, check login state
  useEffect(() => {
    checkToken();
  }, [location]);

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };


  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [isMdOrLarger, setIsMdOrLarger] = useState(window.innerWidth >= 768); // Bootstrap md breakpoint is 768px

  useEffect(() => {
    const handleResize = () => {
      setIsMdOrLarger(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`vh-100 p-3 left-side-menu position-fixed top-0 start-0 ${
          sidebarOpen ? "d-block" : "d-none d-md-block"
        }`}
        style={{ width: "208px", zIndex: 1050 }}
      >
        <h4 className="mb-4">Stindr</h4>
        <ul className="nav flex-column dashboard-menu">
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="nav-link"
              style={{verticalAlign:"middle",display:"flex", paddingLeft:"5px"}}
            >
              <span class="material-icons">dashboard</span>&nbsp;
              <label className="ml-2">Dashboard</label>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/medical-history"
              className="nav-link"
              style={{verticalAlign:"middle",display:"flex", paddingLeft:"5px"}}
            >
              <span class="material-icons">history</span>&nbsp;
              <label className="ml-2">Medical History</label>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/order-list"
              className="nav-link"
              style={{verticalAlign:"middle",display:"flex", paddingLeft:"5px"}}
            >
              <span class="material-icons">shopping_cart</span>&nbsp;
              <label className="ml-2">Order List</label>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/notifications"
              className="nav-link"
              style={{verticalAlign:"middle",display:"flex", paddingLeft:"5px"}}
            >
              <span class="material-icons">notifications</span>&nbsp;
              <label className="ml-2">Notifications</label>
            </Link>
          </li>


          {isLoggedIn ? (
            <li className="nav-item ">
              <button className="nav-link border-0 bg-transparent"
              style={{verticalAlign:"middle",display:"flex", paddingLeft:"5px"}}
              >
                <span class="material-icons">logout</span>&nbsp;
                <label className="ml-2">Logout</label>
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                style={{verticalAlign:"middle",display:"flex", paddingLeft:"5px"}}
              >
                <span class="material-icons">login</span>&nbsp;
                <label className="ml-2">Login</label>
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Main content area */}
      <div
        className="flex-grow-1 ms-md-0"
        style={{ marginLeft: sidebarOpen ? "250px" : "0" }}
      >
        {/* Top Navbar */}
        <nav className="navbar bg-light px-3 d-md-none shadow-sm">
          <button className="btn btn-outline-secondary" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <span className="ms-3 fw-bold">Stindr</span>
        </nav>

        {/* Actual page content */}
        <div
          style={{
            marginLeft: isMdOrLarger && !sidebarOpen ? "208px" : "0",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
