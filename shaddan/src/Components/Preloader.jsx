import React, { useEffect, useState } from "react";
import "./preloader.css";
import Images from "../assets/Images/Image"; // your logo image path

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // hide after 2s
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-container">
      <img src={Images.logo} alt="Logo" className="preloader-logo" />
      <div className="spinner"></div>
    </div>
  );
}
