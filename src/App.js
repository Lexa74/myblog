import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/*<Route path="/createChat" element={} />*/}
          {/*<Route path="/chat" element={} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
