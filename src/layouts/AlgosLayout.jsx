import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Algo/Footer.jsx";

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
