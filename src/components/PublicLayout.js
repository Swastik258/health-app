import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./PublicLayout.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Collapse from "bootstrap/js/dist/collapse";
import LexaChatbot from "./LexaChatbot";
import { useUserCountry } from "../hooks/useUserCountry";

const PublicLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const paymentApi = process.env.REACT_APP_API_Payment;
  const hostName = process.env.REACT_APP_WEB_HOSTNAME;
  const country = useUserCountry();
  const userLocation = localStorage.getItem("userCountry");
  const parsedLocation = userLocation ? JSON.parse(userLocation) : null;
  const countryId = parsedLocation?.id || null;
  
  // Safely get userDetail with null check
  const getUserDetail = () => {
    try {
      const userDetailStr = localStorage.getItem("userDetail");
      return userDetailStr ? JSON.parse(userDetailStr) : null;
    } catch (error) {
      console.error("Error parsing userDetail:", error);
      return null;
    }
  };

  const userDetail = getUserDetail();
  const userImage = userDetail?.imageUrl || "/default-avatar.png";

  useEffect(() => {
    if (!countryId) return; 
    const API_URL = `${paymentApi}/menu?countryId=${countryId}`;

    const fetchMenuData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMenuData(data);
        if (data.length > 0) {
          setActiveCategory(data[0]);
        }
      } catch (error) {
        console.error("Could not fetch menu data:", error);
      }
    };
    fetchMenuData();
    
    // Set up 10-minute interval refresh
    const interval = setInterval(fetchMenuData, 10 * 60 * 1000);

    // Handle screen resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    // ✅ Cleanup both
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [countryId, paymentApi]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleOpenMegaMenu = (e) => {
    e.preventDefault();
    setIsMegaMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseMegaMenu = () => {
    setIsMegaMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  // Toggle the dropdown for a category on mobile
  const handleCategoryClick = (category) => {
    // If the clicked category is already active, close the dropdown
    if (activeCategory?.categoryName === category.categoryName) {
      setActiveCategory(null);
    } else {
      // Otherwise, open the new category's dropdown
      setActiveCategory(category);
    }
  };

  const handleNavLinkClick = () => {
    const navbarCollapseEl = document.getElementById("navbarNav");
    if (navbarCollapseEl.classList.contains("show")) {
      const bsCollapse = new Collapse(navbarCollapseEl, { toggle: false });
      bsCollapse.hide();
    }
  };
  
  const handleOpenCartList = () => {
    // Cart functionality
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header
        className="bg-black py-3 px-4 position-sticky top-0 w-100"
        style={{ zIndex: 1030 }}
      >
        <nav className="navbar navbar-expand-md navbar-dark bg-black">
          <div className="container">
            <Link to="/" className="navbar-brand h4 m-0">
              Stindr
            </Link>
            <button
              className="navbar-toggler d-md-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list fs-3"></i>
            </button>
            <div
              className="collapse navbar-collapse d-md-flex justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={handleOpenMegaMenu}
                    style={{ border: "1px solid white", borderRadius: "9px" }}
                  >
                    Test Kits
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/cart"
                    onClick={handleOpenCartList}
                  >
                    Cart
                  </Link>
                </li>
                {isLoggedIn ? (
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link btn btn-link dropdown-toggle p-0 border-0"
                      id="userDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ background: "none" }}
                    >
                      <img
                        src={userImage}
                        alt="User"
                        style={{
                          width: "35px",
                          height: "35px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </button>

                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="userDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="/dashboard">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("userDetail");
                            setIsLoggedIn(false);
                            navigate("/");
                          }}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" onClick={handleNavLinkClick}>
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {isMegaMenuOpen && (
        <div className="mega-menu-container">
          <button
            id="close-mega-menu"
            onClick={handleCloseMegaMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
          <div className="container mega-menu-content">
            <div className="row h-100">
              {/* This column is for the dropdown menu on mobile and the left column on desktop */}
              <div
                className="col-md-3 mega-menu-column d-flex flex-column"
                id="category-column"
              >
                <h6 className="d-md-block d-none">All Treatments</h6>
                <ul className="list-unstyled">
                  {menuData.map((category) => (
                    <li key={category.categoryName} className="category-item">
                      <div
                        className={`d-flex justify-content-between align-items-center ${
                          activeCategory?.categoryName === category.categoryName
                            ? "active-category"
                            : ""
                        }`}
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category.categoryName}
                        {isMobile && (
                          <i
                            className={`bi bi-chevron-${
                              activeCategory?.categoryName ===
                              category.categoryName
                                ? "up"
                                : "down"
                            }`}
                          ></i>
                        )}
                      </div>

                      {/* Dropdown for subcategories and products */}
                      {isMobile &&
                        activeCategory?.categoryName ===
                          category.categoryName && (
                          <div className="mt-3">
                            {category.subcategories.map((sub, subIndex) => (
                              <div key={subIndex}>
                                <h6 className="mt-3 text-secondary">
                                  {sub.subcategoryName}
                                </h6>
                                <ul className="list-unstyled ps-3">
                                  {sub.products.map((p, pIndex) => (
                                    <li key={pIndex} className="product-item">
                                      <Link
                                        to={`/products/${p.slug}`}
                                        onClick={handleCloseMegaMenu}
                                      >
                                        {p.productTitle}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* This column is for subcategories on desktop only */}
              <div
                className="col-md-6 mega-menu-column d-none d-md-flex flex-column"
                id="products-column"
              >
                {/* <h6>Subcategories & Products</h6> */}
                <div className="mb-4"></div>
                {activeCategory?.subcategories.map((sub, index) => (
                  <div key={index}>
                    <label className="mt-3">{sub.subcategoryName}</label>
                    <ul className="list-unstyled">
                      {sub.products.map((p, pIndex) => (
                        <li key={pIndex} className="product-item">
                          <Link
                            to={`/products/${p.slug}`}
                            onClick={handleCloseMegaMenu}
                          >
                            {p.productTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* This column is for branding on desktop only */}
              <div
                className="col-md-3 mega-menu-column d-none d-md-block"
                id="branding-column"
              >
                <div className="branding-details">
                  <div className="frame-container">
                    <img
                      src={`${hostName}/images/couple-6976409_1280.jpg`}
                      className="img-fluid mb-3 framed-image"
                      alt="Stindr Logo"
                    />
                  </div>
                  <h5>Claim Your Wellness</h5>
                  <p>Check your health online for free with our LEXA.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content and Footer */}
      <main className="flex-grow-1">
        <div>
          <Outlet />
        </div>
      </main>
      <LexaChatbot />
      <footer className="bg-black text-light py-4 border-top border-secondary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <h4 className="text-white mb-1">Stindr</h4>
              <p className="small mb-0 text-white">
                Empowering your health with privacy and care.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="mb-2">
                <a href="/about" className=" me-3 text-decoration-none">
                  About Us
                </a>
                <a href="/contact" className="me-3 text-decoration-none">
                  Contact
                </a>
                <a href="/terms" className="me-3 text-decoration-none">
                  Terms
                </a>
                <a href="/privacy" className="me-3 text-decoration-none">
                  Privacy
                </a>
                <a href="/login" className="me-3 text-decoration-none">
                  Login
                </a>
                <a href="/register" className="text-decoration-none">
                  Register
                </a>
              </div>
              <div>
                <a href="#" className="me-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center border-top border-secondary pt-3">
            <small className="text-white">
              &copy; {new Date().getFullYear()} Stindr. All rights reserved.
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;