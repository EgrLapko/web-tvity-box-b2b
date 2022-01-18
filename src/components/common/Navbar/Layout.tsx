import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  center?: ReactNode;
  right?: ReactNode;
  children: React.ReactChild;
}

const Layout: React.FC<LayoutProps> = ({ center, right, children }) => {
  return (
    <>
      <Navbar center={center} right={right} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
