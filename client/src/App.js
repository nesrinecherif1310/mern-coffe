import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./components/Products/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/coffe/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
