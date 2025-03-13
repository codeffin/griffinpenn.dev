import "./Styles/ContactMeStyles.css";

function ContactMe() {
  function ChangePage() {
    localStorage["currentPage"] = "Contact";
  }
  return (
    <>
      <div onMouseEnter={ChangePage} id="contact-body">
        <div className="container">
          <div className="contact-elements-desktop">
            <div className="contact-header">
              <p>
                Dont Be a <b className="colored-emp">Stranger</b>!
              </p>
            </div>
            <p className="contact-bio">
              You can send me an email here, or message me on my{" "}
              <a
                href="https://www.linkedin.com/in/griffin-penn-0a2190215"
                className="linkedin"
                target="new"
              >
                <b>LinkedIn</b>
              </a>
              , either way I can’t wait to hear from you!
            </p>

            <form
              action="https://formsubmit.co/griffinpenndev@gmail.com"
              method="POST"
              className="contact-container"
            >
              <label id="email-label" className="label-styles" htmlFor="email">
                Your <b>Email</b>
              </label>
              <input
                id="email"
                name="email"
                className="email-box-styles"
                type="email"
                required
              ></input>
              <label className="label-styles" htmlFor="message">
                What did you want to <b>talk</b> about?
              </label>
              <textarea
                id="message"
                name="message"
                className="message-box-styles"
                required
              ></textarea>
              <input
                className="send-button-styles"
                type="submit"
                value={"S E N D"}
              ></input>
            </form>
          </div>
          <div className="contact-elements-mobile">
            <div className="contact-header">
              <p>
                Dont Be a <b className="colored-emp">Stranger</b>!
              </p>
            </div>

            <div className="contact-bio">
              <p>
                You can send me an email here, or message me on my{" "}
                <a
                  href="https://www.linkedin.com/in/griffin-penn-0a2190215"
                  className="linkedin"
                  target="new"
                >
                  <b>LinkedIn</b>
                </a>
                , either way I can’t wait to hear from you!
              </p>
            </div>

            <form
              action="https://formsubmit.co/griffinpenndev@gmail.com"
              method="POST"
              className="contact-container"
            >
              <label id="email-label" className="label-styles" htmlFor="email">
                Your <b>Email</b>
              </label>
              <input
                id="email"
                name="email"
                className="email-box-styles"
                type="email"
                required
              ></input>
              <label className="label-styles" htmlFor="message">
                What did you want to <b>talk</b> about?
              </label>
              <textarea
                id="message"
                name="message"
                className="message-box-styles"
                required
              ></textarea>
              <input
                className="send-button-styles"
                type="submit"
                value={"S E N D"}
              ></input>
            </form>
          </div>
          <footer className="footer-styles">&copy;Griffin Penn 2025</footer>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
