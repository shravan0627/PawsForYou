import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Pets from "./Components/Pets/Pets";
import AdoptForm from "./Components/AdoptForm/AdoptForm";
import AdminLogin from "./Components/AdminPanel/AdminLogin";
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import BoardingServices from './Components/BoardingServices/BoardingServices';
import "./App.css";

const Layout = ({ children }) => (
  <div className="container-fluid p-0">
    <Navbar />
    <main className="min-vh-100">
      {children}
    </main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/pets" element={<Layout><Pets /></Layout>} />
        <Route path="/adopt-form" element={<Layout><AdoptForm /></Layout>} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/boarding" element={<BoardingServices />} />
      </Routes>
    </Router>
  );
};

export default App;