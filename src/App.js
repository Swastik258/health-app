import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import MedicalHistory from "./pages/MedicalHistory";
import NotificationHistory from "./pages/NotificationHistory";
import OrderList from "./pages/OrderList";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import VerifyOtp from "./pages/VerifyOtp";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicLayout from "./components/PublicLayout";
import Home from "./pages/Home";
import HivLabTestPage from "./pages/HivLabTestPage";
import InstiHivTestPage from "./pages/InstiHivTestPage";
import OraquickHivTestPage from "./pages/OraquickHivTestPage";
import ChlamydiaTestPage from "./pages/ChlamydiaTestPage";
import GonorrhoeaTestPage from "./pages/GonorrhoeaTestPage";
import SyphilisTestPage from "./pages/SyphilisTestPage";
import HepatitisBTestPage from "./pages/HepatitisBTestPage";
import HepatitisCTestPage from "./pages/HepatitisCTestPage";
import EloinePillPage from "./pages/EloinePillPage";
import Gedarel30PillPage from "./pages/Gedarel30PillPage";
import LevestPillPage from "./pages/LevestPillPage";
import LizinnaPillPage from "./pages/LizinnaPillPage";
import LucettePillPage from "./pages/LucettePillPage";
import MarvelonPillPage from "./pages/MarvelonPillPage";
import MercilonPillPage from "./pages/MercilonPillPage";
import Microgynon30PillPage from "./pages/Microgynon30PillPage";
import Millinette30PillPage from "./pages/Millinette30PillPage";
import OvranettePillPage from "./pages/OvranettePillPage";
import RigevidonPillPage from "./pages/RigevidonPillPage";
import YasminPillPage from "./pages/YasminPillPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./pages/CartContext";
function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        {/* Public pages with PublicLayout */}
        <Route element={<PublicLayout />}>
         
          <Route path="/" element={<Home />} />
          <Route path="/products/:slug" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hiv-lab" element={<HivLabTestPage />} />
          <Route path="/insti-hiv" element={<InstiHivTestPage />} />
          <Route path="/oraquick" element={<OraquickHivTestPage />} />
          <Route path="/chlamydia" element={<ChlamydiaTestPage />} />
          <Route path="/gonorrhoea" element={<GonorrhoeaTestPage />} />
          <Route path="/syphillis" element={<SyphilisTestPage />} />
          <Route path="/hepatitis-b" element={<HepatitisBTestPage />} />
          <Route path="/hepatitis-c" element={<HepatitisCTestPage />} />
          <Route path="/eloine" element={<EloinePillPage />} />
          <Route path="/gedarel-30" element={<Gedarel30PillPage />} />
          <Route path="/levest" element={<LevestPillPage />} />
          <Route path="/lizinna" element={<LizinnaPillPage />} />
          <Route path="/lucette" element={<LucettePillPage />} />
          <Route path="/marvelon" element={<MarvelonPillPage />} />
          <Route path="/mercilon" element={<MercilonPillPage />} />
          <Route path="/microgynon" element={<Microgynon30PillPage />} />
          <Route path="/millinette" element={<Millinette30PillPage />} />
          <Route path="/ovranette" element={<OvranettePillPage />} />
          <Route path="/rigevidon" element={<RigevidonPillPage />} />
          <Route path="/yasmin" element={<YasminPillPage />} />
          
        </Route>

        {/* Protected routes with sidebar Layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<PublicLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/medical-history" element={<MedicalHistory />} />
            <Route path="/notifications" element={<NotificationHistory />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
