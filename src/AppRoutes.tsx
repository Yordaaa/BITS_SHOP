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
import AuthRoute from './components/AuthRoute';
import Wishlist from './pages/wishlist';
import ManageProducts from './pages/ManageProducts';
import NotFoundPage from './pages/NotFoundPage';
import UpdateProduct from './pages/UpdateProduct';
import BidHistory from './pages/BidHistory';
import ForgotPassword from './pages/authPages/ForgetPassword';
import ResetPassword from './pages/authPages/ResetPassword';
import ChangePassword from './pages/authPages/ChangePassword';
import ManageAccount from './pages/ManageAccount.tsx';
import Settings from './pages/Setting.tsx';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<AuthRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/bids/:id" element={<Bids />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/bidrequest/:id" element={<BidRequest />} />
                <Route path="/update-product/:id" element={<UpdateProduct />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/bid-history" element={<BidHistory />} />
                <Route path="/manageaccount" element={<ManageAccount />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="change" element={<ChangePassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/bidrequest" element={<BidRequest />} />
                <Route path="/bids" element={<Bids />} />
                <Route path="/checkout/:id" element={<Checkout />} />
                <Route path="/manage" element={<ManageProducts />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="forget" element={<ForgotPassword />} />
            <Route path="reset" element={<ResetPassword />} />
        </Routes>
    );
}

export default AppRoutes;
