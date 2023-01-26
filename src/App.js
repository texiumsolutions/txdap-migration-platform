import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Login from './Home/Login/Login';
import SignUp from './Home/Login/SignUp';
import Dashboard from './Home/NavbarRoutes/Dashboard/Dashboard';
import Eprofile from './Home/NavbarRoutes/Extraction/Eprofile';
import Extraction from './Home/NavbarRoutes/Extraction/Extraction';
import Injection from './Home/NavbarRoutes/Injection/Injection';
import UploadFile from './Home/NavbarRoutes/Injection/UploadFile';
import Reports from './Home/NavbarRoutes/Reports/Reports';
import Transformation from './Home/NavbarRoutes/Transformation/Transformation';
import DocumentInfo from './Home/NavbarRoutes/Injection/DocumentInfo';
import Informations from './Home/NavbarRoutes/Extraction/Informations';


function App() {

  const onFileChange = (files) => {
    console.log(files);
  }

  return (
    <div className="App">

      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/extraction' element={<Extraction></Extraction>}></Route>
        <Route path='/eprofile' element={<Eprofile></Eprofile>}></Route>
        <Route path='/transformation' element={<Transformation></Transformation>}></Route>
        <Route path='/injection' element={<Injection></Injection>}></Route>
        <Route path='/information' element={<DocumentInfo></DocumentInfo>}></Route>
        <Route path='/upload' element={<UploadFile
          onFileChange={(files) => onFileChange(files)}
        />}></Route>
        <Route path='/reports' element={<Reports></Reports>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/informations' element={<Informations></Informations>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
