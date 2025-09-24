import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import SignUp from "./pages/SignUp";
import Questions from "./pages/Questions";
import FinishSignUp from "./pages/FinishSignUp";
import HowItWorks from "./pages/HowItWorks";
import ChoosePlan from "./pages/ChoosePlan";
import NotFound from "./pages/NotFound";
import BusinessOrCreator from "./pages/BusinessOrCreator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms_of_service" element={<TermsOfService />} />
        <Route path="/about" element={<About />} />
        <Route path="/get_started" element={<GetStarted />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/finish_signup" element={<FinishSignUp />} />
        <Route path="/how_it_works" element={<HowItWorks />} />
        <Route path="/chooseplan" element={<ChoosePlan />} />
        <Route path="/business_or_creator" element={<BusinessOrCreator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
