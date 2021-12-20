// import components
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
// import styling
import "./layout.scss";

// layout component
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// export component
export default Layout;
