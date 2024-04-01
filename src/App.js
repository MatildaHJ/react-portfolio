import Navbar from "./Navbar";
import Main from "./Main";
import "./App.css";
import MLLogo from "./images/ML-logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="main-container">
          <header id="about">
            <p>
              Hello, I'm Matilda, a Front-end developer based in Stockholm,
              Sweden. I just finished the last part of my studies with{" "}
              <a
                href="https://www.shecodes.io/"
                target="_blank"
                rel="noreferrer"
              >
                SheCodes
              </a>{" "}
              and actively seeking an internship where i can take my coding to
              the next level and contribute with a lot of creativity, drive and
              (almost annoyingly) strong determination to find solutions for all
              problems that may arise. Hire me.
            </p>
          </header>

          <Main />
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <img src={MLLogo} alt="logo" className="mlLogoSmall" />
          <p className="footer-text">
            16751 Bromma
            <br />
            matilda.hj.larsson@gmail.com
          </p>

          <small>
            This is an{" "}
            <a
              href="https://github.com/MatildaHJ/react-portfolio"
              className="gitLink"
              target="_blank"
              rel="noreferrer"
            >
              open source code
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
}
