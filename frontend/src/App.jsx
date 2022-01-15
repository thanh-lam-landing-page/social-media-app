
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./container/Home";
import Login from "./components/Login";

import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
