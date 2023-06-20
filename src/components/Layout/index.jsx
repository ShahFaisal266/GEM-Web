import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar/Navbar";

export default function Layout({ headerVariant }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar variant={headerVariant}/>
      <Header variant={headerVariant}/>
      <Outlet />
     
    </>
  );
}
