import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Upload from "./Home/components/Upload.tsx";
import Home from "./Home/Home";
import Login from "./Home/Login/Login";
import SignUp from "./Home/Login/SignUp";
import Dashboard from "./Home/NavbarRoutes/Dashboard/Dashboard";
import Extraction from "./Home/NavbarRoutes/Extraction/Extraction";
import Injection from "./Home/NavbarRoutes/Injection/Injection";
import Reports from "./Home/NavbarRoutes/Reports/Reports";
import Transformation from "./Home/NavbarRoutes/Transformation/Transformation";
import DocumentInfo from "./Home/NavbarRoutes/Injection/DocumentInfo";
import Eprofile from "./Home/NavbarRoutes/Extraction/Eprofile";
import Informations from "./Home/NavbarRoutes/Extraction/Informations";
import Plus from "./Home/Dashboard/Plus";
import HomeNav from "./Home/Dashboard/HomeNav";
import Settings from "./Home/Dashboard/Settings";
import Binder from "./Home/NavbarRoutes/Extraction/Binder";
import Object from "./Home/NavbarRoutes/Extraction/Object";
import EUFile from "./Home/NavbarRoutes/Extraction/EUFile";
import Document from "./Home/NavbarRoutes/Extraction/Document";
import AllInformations from "./Home/Dashboard/AllInformations";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/home" element={<HomeNav></HomeNav>}>
          <Route path="house" element={<Home></Home>}></Route>
          <Route path="allinformation" element={<AllInformations></AllInformations>}></Route>
          <Route path="plus" element={<Plus></Plus>}></Route>
          <Route path="settings" element={<Settings></Settings>}></Route>
        </Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/transformation"
          element={<Transformation></Transformation>}
        ></Route>
        <Route path="/injection" element={<Injection></Injection>}>
          <Route
            path="information"
            element={<DocumentInfo></DocumentInfo>}
          ></Route>
          <Route path="upload" element={<Upload></Upload>}></Route>
        </Route>

        <Route path="/reports" element={<Reports></Reports>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

        <Route path="/extraction" element={<Extraction></Extraction>}>
          <Route path="runs" element={<Informations></Informations>} />
          <Route path="binder" element={<Binder></Binder>} />
          <Route path="object" element={<Object></Object>} />
          <Route path="document" element={<Document></Document>} />
          <Route path="euFile" element={<EUFile></EUFile>} />
        </Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
