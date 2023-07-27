import React from "react";
import Header from "../shared/header/header";
import Footer from "../shared/footer/footer";
import Navbar from "../shared/navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <hr />
      <Navbar />
      <div className="bg-gray-100 py-3">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
