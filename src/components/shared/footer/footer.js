import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={`w-full bg-white text-center py-2 ${style.footer}`}>
      © 2023 My PC Center Ltd | All rights reserved
    </div>
  );
};

export default Footer;
