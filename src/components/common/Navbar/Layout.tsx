import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Navbar";

interface IProps {
  children: React.ReactChild;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
