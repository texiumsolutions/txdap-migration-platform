import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Upload from './Home/components/Upload.tsx';
import Home from './Home/Home';
import Login from './Home/Login/Login';
import SignUp from './Home/Login/SignUp';
import Dashboard from './Home/NavbarRoutes/Dashboard/Dashboard';
import Extraction from './Home/NavbarRoutes/Extraction/Extraction';
import Injection from './Home/NavbarRoutes/Injection/Injection';
import UploadFile from './Home/NavbarRoutes/Injection/UploadFile';
import Reports from './Home/NavbarRoutes/Reports/Reports';
import Transformation from './Home/NavbarRoutes/Transformation/Transformation';
import DocumentInfo from './Home/NavbarRoutes/Injection/DocumentInfo';
import Eprofile from './Home/NavbarRoutes/Extraction/Eprofile';
import Informations from './Home/NavbarRoutes/Extraction/Informations';




function App() {

  return (
    <div className="App">
      {/* <Home></Home> */}

      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/transformation' element={<Transformation></Transformation>}></Route>
        <Route path='/injection' element={<Injection></Injection>}>
          <Route path='information' element={<DocumentInfo></DocumentInfo>}></Route>
          <Route path='upload' element={<Upload></Upload>}></Route>
        </Route>

        <Route path='/reports' element={<Reports></Reports>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>

        <Route path='/extraction' element={<Extraction></Extraction>}> </Route>

        <Route path='/runs' element={<Informations></Informations>} />
        <Route path='/eprofile' element={<Eprofile></Eprofile>} />

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
