import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Home from "./pages/Home/Home.jsx";
import Coupon from "./pages/Coupon/Coupon.jsx";
import User from "./pages/User/User.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Notification from "./pages/notification/notification.jsx";
import BackButton from "./components/Back-Button/BackButton.jsx";
import Register from "./pages/Register/Register.jsx";
import Payment from "./components/Payment/Payment.jsx";
import AddItem from "./components/Add_item/AddItem.jsx";
import LiveStatus from './pages/LiveStatus/LiveStatus';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import { getUserProfile } from './redux/Auth/auth-actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if user is logged in and get profile data
    if (localStorage.getItem('token')) {
      dispatch(getUserProfile());
    }
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/user/*" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/live-status" element={<LiveStatus />} />
        </Route>
      </Routes>
      <BackButton />
    </>
  );
}

export default App;
