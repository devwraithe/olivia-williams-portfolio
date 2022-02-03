// imports
import Navbar from "../../components/navbar/navbar";
import Layout from "../../components/layout/layout";
import Footer from "../../components/footer/footer";
import Embed from "../../components/embed/embed";
import { motion } from "framer-motion";
import "./app.scss";

// component
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
    <div
      className="index"
      onLoad={document
        .querySelector("body")
        .classList.remove("no-overlayScroll")}
    >
      <Navbar />
      <Layout>
        <header className="header">
          <div className="header__wrapper">
            <div className="header__intro">
              <h1 className="header__title">Hey there, I'm Olivia!</h1>
              <h4 className="header__subtitle">
                I'm a UX Researcher and Designer
              </h4>
              <span className="header__summary">
                <p>
                  I've always been fascinated by the way products are designed
                  to fit the lives of humans. Whether it's through digital or
                  physical products designed to make life easier and simpler for
                  the user. I am extremely passionate about spotting gaps and
                  loopholes in ideas to create simpler and easier to use
                  products in the world.
                </p>
                <p>
                  When i'm not working, I'm spending time with my family and
                  friends playing board games and travelling. I enjoy going out
                  for drinks, meeting new people and playing football.
                </p>
              </span>
              <button className="header__btn header__btn--hover">
                Contact Me
              </button>
            </div>
            <div className="header__img">
              <img
                className="header__imgSrc"
                src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg"
                alt="olivia-williams-snapshot"
              />
            </div>
          </div>
        </header>
        <section className="inspo">
          <div className="inspo__wrapper">
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
        <section className="work">
          <div className="work__wrapper">
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
      <Footer />
    </div>
  );
};

// export component
export default App;
