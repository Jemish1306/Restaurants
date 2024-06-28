
import { Route,  Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Registration } from "./Components/Auth/Registration";
import { ForgetPassword } from "./Components/Auth/ForgetPassword";
import { Login } from "./Components/Auth/Login";
import { Dashboard } from "./Components/Admin/Deshboard";

import ProfilePage from './Pages/ProfilePage';
import ParcelOrderManagement from "./Components/Admin/PercelOrderMangement";
import OnsiteOrderManagement from "./Components/Admin/OnsiteOrderManagement";

const App = () => {
  return (
    <>
    
   
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/deshbord" element={<Dashboard/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/parcel-order" element={<ParcelOrderManagement/>}/>
        <Route path="/onsite-order" element={<OnsiteOrderManagement/>}/>
       
      </Routes>
      
    </>
  );
};

export default App;
