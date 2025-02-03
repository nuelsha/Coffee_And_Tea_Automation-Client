import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Coupon from "./pages/Coupon/Coupon.jsx";
import User from "./pages/User/User.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import BackButton from "./components/Back-Button/BackButton.jsx";
import Register from "./pages/Register/Register.jsx";
import Payment from "./components/Payment/Payment.jsx";
import AddItem from "./components/Add_item/AddItem.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/*" element={<User />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/add-item" component={AddItem} />
      </Routes>
      <BackButton />
    </>
  );
}

export default App;
