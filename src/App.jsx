import MainLandingSection from "./screens/MainLandingSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServicesScreen from "./screens/ServicesScreen";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<MainLandingSection />} />
          <Route path="/services" element={<ServicesScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
