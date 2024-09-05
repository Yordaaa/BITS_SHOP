import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";
import About from "./pages/About";
import Login from "./pages/authPages/Login";
import Signup from "./pages/authPages/SignUp";
import AddProduct from "./pages/AddProduct";
import Contact from "./pages/Contact";
import { ProductDetail } from "./pages/ProductDetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addproduct" element={<AddProduct />} />

      <Route path="/productdetail" element={<ProductDetail />} />
    </Routes>
  );
}

export default AppRoutes;
