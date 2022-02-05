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
        {/* <img
          className="project__img"
          src="https://brandux.agency/wp-content/uploads/2021/12/myukraine-02.jpg"
          alt=""
        />
        <img
          className="project__img"
          src="https://brandux.agency/wp-content/uploads/2021/12/myukraine-03.jpg"
          alt=""
        />
        <img
          className="project__img"
          src="https://brandux.agency/wp-content/uploads/2021/12/myukraine-04.jpg"
          alt=""
        />
        <img
          className="project__img"
          src="https://brandux.agency/wp-content/uploads/2021/12/myukraine-05.jpg"
          alt=""
        /> */}
      </div>
      <Footer />
    </div>
  );
};

// export
export default CaseStudy;
