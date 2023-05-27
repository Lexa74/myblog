import logo from './logo.svg';
import './App.scss';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {UserInfo} from "./pages/userInfo/UserInfo";
import {AboutMe} from "./pages/aboutMe/AboutMe";
import {Tasks} from "./pages/tasks/Tasks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userInfo/:userID" element={<UserInfo/>} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/tasks" element={<Tasks/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
