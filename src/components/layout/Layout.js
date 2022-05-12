import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout;