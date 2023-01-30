import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Home/Home';
import Login from './Home/Login/Login';
import SignUp from './Home/Login/SignUp';
import Dashboard from './Home/NavbarRoutes/Dashboard/Dashboard';
import Exclude from './Home/NavbarRoutes/Extraction/Exclude';
import Extraction from './Home/NavbarRoutes/Extraction/Extraction';
import Search from './Home/NavbarRoutes/Extraction/Search';
import DocumentInfo from './Home/NavbarRoutes/Injection/DocumentInfo';
import Injection from './Home/NavbarRoutes/Injection/Injection';
import UploadFile from './Home/NavbarRoutes/Injection/UploadFile';
import Reports from './Home/NavbarRoutes/Reports/Reports';
import Transformation from './Home/NavbarRoutes/Transformation/Transformation';


function App() {

  const onFileChange = (files) => {
    console.log(files);
  }

  return (
    <div className="App">
      {/* <Home></Home> */}

      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/extraction' element={<Extraction></Extraction>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/exclude' element={<Exclude></Exclude>}></Route>
        <Route path='/transformation' element={<Transformation></Transformation>}></Route>
        <Route path='/injection' element={<Injection></Injection>}></Route>
        <Route path='/information' element={<DocumentInfo></DocumentInfo>}></Route>
        <Route path='/upload' element={<UploadFile
          onFileChange={(files) => onFileChange(files)}
        />}></Route>
        <Route path='/reports' element={<Reports></Reports>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
