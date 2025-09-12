import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms_of_service" element={<TermsOfService />} />
        <Route path="/about" element={<About />} />
        <Route path="/get_started" element={<GetStarted />} />
      </Routes>
    </>
  );
}

export default App;
