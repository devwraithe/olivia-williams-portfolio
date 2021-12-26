// import components
import Layout from "../../components/layout/layout";
import Embed from "../../components/embed/embed";
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
            <div className="header__scroll">
              <div className="header__line1">
                <svg width="100" height="100">
                  <line
                    x1="50"
                    x2="50"
                    y2="100"
                    stroke="#191919"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div className="header__text">keep scrolling</div>
              <div className="header__line2">
                <svg width="100" height="100">
                  <line
                    x1="50"
                    x2="50"
                    y2="100"
                    stroke="#191919"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </header>
        {/* inspirations */}
        <section className="inspo">
          <div className="inspo__wrapper">
            {/* title */}
            <div className="inspo__title">
              <div className="inspo__line1">
                <svg width="100px" height="6px">
                  <path
                    fill="#191919"
                    stroke-width="3.5"
                    stroke="#191919"
                    d="M0 0 l1120 0"
                  />
                </svg>
              </div>
              <div className="inspo__text">WHAT INSPIRES ME?</div>
              <div className="inspo__line2">
                <svg width="100px" height="6px">
                  <path
                    fill="#191919"
                    stroke-width="3.5"
                    stroke="#191919"
                    d="M0 0 l1120 0"
                  />
                </svg>
              </div>
            </div>
            <div className="inspo__content">
              <div className="inspo__contentItem">
                <Embed embedSrc="TfpiHv1kP5E" />
              </div>
              <div className="inspo__contentItem">
                <Embed embedSrc="xfJxitgR4ZI" />
              </div>
            </div>
          </div>
        </section>
        {/* work */}
        <section className="work">
          <div className="work__wrapper"></div>
        </section>
      </Layout>
    </div>
  );
}

// export component
export default App;
