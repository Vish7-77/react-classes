

import MainLandingSection from "./screens/MainLandingSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesScreen from "./screens/ServicesScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLandingSection />} />
          <Route path="/services" element={<ServicesScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
