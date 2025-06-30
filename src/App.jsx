import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Signin from "./pages/Signin.jsx";
import DhanUI from "./pages/DhanUI.jsx";
import Dhan from "./pages/Dhan.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AlgoPage from "./pages/AlgoPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/algos" element={<AlgoPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dhanui" element={<DhanUI />} />
        <Route
          path="/dhan"
          element={
            <ProtectedRoute>
              <Dhan />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
