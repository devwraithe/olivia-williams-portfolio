// import components
import Navbar from "../navbar/navbar";
// import styling
import "./layout.scss";

// layout component
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

// export component
export default Layout;
