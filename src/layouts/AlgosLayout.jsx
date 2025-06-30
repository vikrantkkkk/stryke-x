import React from "react";
import Footer from "../components/Algo/Footer.jsx";
import Header from "../components/Algo/Header.jsx";

const AlgosLayout = ({ children }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default AlgosLayout;
