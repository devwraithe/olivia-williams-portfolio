// imports
import Navbar from "../../components/navbar/navbar";
import Layout from "../../components/layout/layout";
import Footer from "../../components/footer/footer";
import "./contact.scss";

// components
function Contact() {
  return (
    <div
      className="contact"
      onLoad={document
        .querySelector("body")
        .classList.remove("no-overlayScroll")}
    >
      <Navbar />
      <Layout>
        <header className="header">
          <div className="header__wrapper">
            <h3 className="header__title">Get in Touch</h3>
            {/* subheading */}
            <h4 className="header__subtitle">
              Would you like to{" "}
              <span className="header__pop">build experiences with me</span>?
            </h4>
          </div>
        </header>
        <section className="form">
          <form className="form__data">
            <div className="form__input">
              <label for="name" className="form__label">
                Name
              </label>
              <br />
              <input
                type="text"
                className="form__field"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className="form__input">
              <label for="name" className="form__label">
                Email Address
              </label>
              <br />
              <input
                type="text"
                className="form__field"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form__input">
              <label for="name" className="form__label">
                Message
              </label>
              <br />
              <textarea
                className="form__field form__textarea"
                placeholder="Drop A Nice Message..."
              ></textarea>
            </div>
            <button className="form__btn form__btn--hover">Send Message</button>
          </form>
        </section>
      </Layout>
      <Footer />
    </div>
  );
}

// exports
export default Contact;
