import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLOggedIn] = useState(
    localStorage.getItem("token") || false
  );

  console.log(localStorage.getItem("token"));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? <Login setIsLOggedIn={setIsLOggedIn} /> : <Home />
            }
          />
          <Route
            path="/home"
            element={
              isLoggedIn ? <Home /> : <Login setIsLOggedIn={setIsLOggedIn} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
