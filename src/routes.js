// import components
import { Routes, Route } from "react-router-dom";
import App from "../src/pages/app/app";

// routes component
const SiteRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        {/* <Route path="/about" element={<Work />}></Route> */}
      </Routes>
    </div>
  );
};

// export component
export default SiteRoutes;
