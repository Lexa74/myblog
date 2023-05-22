import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {UserInfo} from "./pages/userInfo/UserInfo";

function App() {
  return (
    <div className="App">
        header
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userInfo/:userID" element={<UserInfo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
