import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Market from './pages/Market';
import About from './pages/About';
import Login from './pages/authPages/Login';
import Signup from './pages/authPages/SignUp';
import Contact from './pages/Contact';
import { ProductDetail } from './pages/ProductDetail';
import Profile from './pages/authPages/Profile';
import BidRequest from './pages/BidRequest';
import Bids from './pages/Bids';
import ProtectedRoute from './components/ProtectedRoute';
import AddProduct from './pages/AddProduct';
import { Checkout } from './pages/Checkout';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/addproduct" element={<AddProduct />} />
            </Route>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bidrequest" element={<BidRequest />} />
            <Route path="/bids" element={<Bids />} />
            <Route path="/checkout/:id" element={<Checkout />} />
        </Routes>
    );
}

export default AppRoutes;
