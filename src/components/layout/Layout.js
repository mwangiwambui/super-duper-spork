import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen App">    
      <Header />
      <div className="flex-1">
      <main className="flex space-x-7 grid-cols-3 lg:grid-cols-5 my-12 mx-6 container mx-auto">
      <Sidebar />
      {props.children}
      </main>
      </div>
      <Footer />
      
    </div>
  )
}

export default Layout;