import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {UserInfo} from "./pages/userInfo/UserInfo";
import {AboutMe} from "./pages/aboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userInfo/:userID" element={<UserInfo/>} />
          <Route path="/about" element={<AboutMe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
