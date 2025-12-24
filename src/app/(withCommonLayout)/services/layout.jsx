import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
