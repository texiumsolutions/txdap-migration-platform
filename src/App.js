import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Login from './Home/Login/Login';
import SignUp from './Home/Login/SignUp';
import Navbar from './Home/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
