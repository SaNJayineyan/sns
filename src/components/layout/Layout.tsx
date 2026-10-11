import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "../ui/FloatingWhatsApp";
import { ScrollToTop } from "../ui/ScrollToTop";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main id="main-content" style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
};
