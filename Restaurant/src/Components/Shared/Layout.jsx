//Restaurant/src/Components/Layout.jsx
import React from "react";

import Footer from "./Footer";
import Navbar from './Navbar';
import Sidebar from "./Sidebar";

 const Layout = ({children})=>{
return (
    <div className="flex min-h-screen">
    <Sidebar/>
    <div className="flex flex-col flex-grow">
      <Navbar/>
      <main className="flex-grow p-8 bg-gray-900 text-white">
        {children}
      </main>
      <Footer/>
    </div>
  </div>
)
}

export default Layout