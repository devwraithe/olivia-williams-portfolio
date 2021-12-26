// import components
import React from "react";
// import styling
import "./footer.scss";

// footer component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        {/* details */}
        <div className="footer__details noSm">&copy;Olivia Williams 2021</div>
        {/* social */}
        <div className="footer__social">
          <div className="footer__socialItem">
            <a
              href=".html"
              className="footer__socialLink footer__socialLink--mod"
            >
              linkedin
            </a>
          </div>
          <div className="footer__socialItem">
            <a
              href=".html"
              className="footer__socialLink footer__socialLink--mod"
            >
              behance
            </a>
          </div>
          <div className="footer__socialItem">
            <a
              href=".html"
              className="footer__socialLink footer__socialLink--mod"
            >
              dribbble
            </a>
          </div>
        </div>
        {/* contact */}
        <div className="footer__contact">
          <span className="footer__socialItem">
            <a
              href=".html"
              className="footer__socialLink footer__socialLink--mod"
            >
              send an email
            </a>
          </span>
        </div>
        {/* details */}
        <div className="footer__details noLg">&copy; Olivia Williams 2021</div>
      </div>
    </footer>
  );
}

// export component
export default Footer;
