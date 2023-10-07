import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"; // Navbar bileşeninizi buraya ekleyin

const NavbarCentered = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={isSmallScreen ? "flex items-center justify-center" : ""}>
      <Navbar />
    </div>
  );
};

export default NavbarCentered;
