// import components
import { Routes, Route } from "react-router-dom";
import App from "../src/pages/App/App";
import About from "../src/pages/About/About";

// routes component
const SiteRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

// export component
export default SiteRoutes;
