import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
