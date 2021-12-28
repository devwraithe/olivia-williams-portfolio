// import components
import Layout from "../../components/layout/layout";
import Embed from "../../components/embed/embed";
import { motion } from "framer-motion";
import "./app.scss";

// home component
const App = () => {
  const itemWrapVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const itemImgVariants = {
    rest: { opacity: 1 },
    hover: { opacity: 0 },
  };

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
          <div className="work__wrapper">
            {/* title */}
            <div className="work__title">
              <div className="work__line1">
                <svg width="100px" height="6px">
                  <path
                    fill="#191919"
                    stroke-width="3.5"
                    stroke="#191919"
                    d="M0 0 l1120 0"
                  />
                </svg>
              </div>
              <div className="work__text">THINGS I'VE DONE</div>
              <div className="work__line2">
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
            {/* content */}
            <div className="work__content">
              <motion.div
                className="work__contentItem"
                whileHover="hover"
                animate="rest"
              >
                <motion.img
                  src="http://images.squarespace-cdn.com/content/v1/547fe426e4b0dc192edb1ed5/1589867350400-OMHQTG1DMGE608HEJQ2P/Buy+on+Google_squarespace_banner.png?format=750w"
                  className="work__contentItemImg"
                  alt=""
                  variants={itemImgVariants}
                />
                <motion.div
                  className="work__contentItemWrap"
                  variants={itemWrapVariants}
                >
                  <h1 className="work__contentItemTitle">Buy on Google</h1>
                  <p className="work__contentItemRole">
                    BRAND STRATEGY / USER EXPERIENCE
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="work__contentItem"
                whileHover="hover"
                animate="rest"
              >
                <motion.img
                  src="https://images.squarespace-cdn.com/content/v1/547fe426e4b0dc192edb1ed5/1587231659543-BTAUFQ91UFD8R69J1LUG/loppet_squarespace+banner_ANIMATION.gif?format=750w"
                  className="work__contentItemImg"
                  alt=""
                  variants={itemImgVariants}
                />
                <motion.div
                  className="work__contentItemWrap"
                  variants={itemWrapVariants}
                >
                  <h1 className="work__contentItemTitle">
                    Loop Winter Festival
                  </h1>
                  <p className="work__contentItemRole">
                    PRINTING / ILLUSTRATION
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="work__contentItem"
                whileHover="hover"
                animate="rest"
              >
                <motion.img
                  src="https://images.squarespace-cdn.com/content/v1/547fe426e4b0dc192edb1ed5/1581238562474-Z7ERPIDJ660Z9NZPXMQC/squarespace+banner+square_animated.gif?format=750w"
                  className="work__contentItemImg"
                  alt=""
                  variants={itemImgVariants}
                />
                <motion.div
                  className="work__contentItemWrap"
                  variants={itemWrapVariants}
                >
                  <h1 className="work__contentItemTitle"> VisD@</h1>
                  <p className="work__contentItemRole">
                    BRANDING / ILLUSTRATION
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

// export component
export default App;
