// import components
import Layout from "../../components/layout/layout";
// import styling
import "./About.scss";

// home component
const About = () => {
  return (
    <div className="about">
      <Layout>
        {/* heading */}
        <header className="header">
          <div className="header__wrapper">
            <h3 className="header__title">About Me</h3>
            {/* subheading */}
            <h4 className="header__subtitle">Empathetic. Fun. Discerning.</h4>
          </div>
        </header>
        {/* information */}
        <section className="info">
          <div className="info__wrapper">
            <div className="info__section">
              <h4 className="info__sectionTitle">My Hobbies</h4>
              <p className="info__sectionSummary">
                Whenever i'm not working, I'm spending time with my family and
                friends, playing board games and travelling together. I enjoy
                meeting new people and playing football.
              </p>
            </div>
            {/* resume */}
            <div className="info__section info__resume">
              <h4 className="info__sectionTitle">My Resume</h4>
              <p className="info__sectionSummary">
                If you'd like to see more information about my background,
                skills and accomplishments, you can download my resume by
                cliking on the button below...
              </p>
              <button className="info__sectionBtn info__sectionBtn--hover">
                Download Resume
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

// export component
export default About;
