// imports
import "./layout.scss";

// component
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  );
};

// export
export default Layout;
