import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="App">
      
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-5 my-12 mx-6 w-2xl container px-2 mx-auto">
      <Sidebar />
      {props.children}
      </main>
      <Footer />
      
    </div>
  )
}

export default Layout;