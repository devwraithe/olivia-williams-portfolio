// import components
import Layout from "../../components/layout/layout";
import "./app.scss";

// home component
function App() {
  return (
    <div className="index">
      <Layout>
        {/* header */}
        <header className="header">
          <div className="header__wrapper">
            <h1 className="header__title">
              Olivia Williams is a{" "}
              <span className="header__stroke">talented designer</span> that's
              focused on <span className="header__stroke">building brands</span>{" "}
              and creating{" "}
              <span className="header__stroke">digital experiences...</span>
            </h1>
          </div>
        </header>
      </Layout>
    </div>
  );
}

// export component
export default App;
