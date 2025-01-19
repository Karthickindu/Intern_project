import React from "react";
import Navbar from "./Navbar";
import Header from './Header';
import MainRoutes from "./Routes";
import { Toaster } from "./components/ui/toaster";

function Layout() {
  return (
    <div className="bg-black">
      <Toaster />

      <Header />
      {/* <div> */}
        <Navbar />
        <MainRoutes />
      {/* </div> */}
    </div>
  );
}

export default Layout;
