// imports
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./caseStudy.scss";
import caseUI from "../../assets/images/food-bit-ui.png";

// component
const CaseStudy = () => {
  return (
    <div
      className="caseStudy"
      onLoad={document
        .querySelector("body")
        .classList.remove("no-overlayScroll")}
    >
      <Navbar />
      <div className="project">
        <img className="project__img" src={caseUI} alt="" />
      </div>
      <Footer />
    </div>
  );
};

// export
export default CaseStudy;
