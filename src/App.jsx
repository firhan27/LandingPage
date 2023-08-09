import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
      </Routes>
    </div>
  );
}

export default App;
