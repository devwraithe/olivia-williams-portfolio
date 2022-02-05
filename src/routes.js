// import components
import { Routes, Route } from "react-router-dom";
import App from "../src/pages/app/app";
import About from "../src/pages/about/about";
import Contact from "../src/pages/contact/contact";
import CaseStudy from "../src/pages/caseStudy/caseStudy";

// routes component
const SiteRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/case-study" element={<CaseStudy />}></Route>
      </Routes>
    </div>
  );
};

// export component
export default SiteRoutes;
