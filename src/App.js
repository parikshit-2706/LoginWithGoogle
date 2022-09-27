import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import Reset from "./Reset";
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/reset" element={<Reset />}></Route>
          <Route path="/register" element={<Register />}></Route>

          {/* <Route path="/register" element={<Register />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
