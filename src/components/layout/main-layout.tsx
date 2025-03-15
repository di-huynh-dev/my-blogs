import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div className="flex-1">
        <Header />

        <main className="p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
