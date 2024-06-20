//Restaurant/src/Components/Layout.jsx
import React from "react";


import Navbar from './Navbar';
import Sidebar from "./Sidebar";

 const Layout = ({children})=>{
return (
  <div className="flex min-h-screen bg-main ">
  <Sidebar />
  <div className="flex flex-col flex-grow">
    <Navbar />
    <main className="flex-grow p-8 text-white bg-mainbg">
      {children}
    </main>
    
  </div>
</div>
)
}

export default Layout