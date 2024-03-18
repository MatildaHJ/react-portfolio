import Navbar from "./Navbar";
import Main from "./Main";
import "./App.css";
import MLLogo from "./images/ML-logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />

        <header id="about">
          <p>
            Hello, I'm Matilda, an aspiring Front-end developer based in
            Stockholm, Sweden. I'm just finishing up the last part of my studies
            with{" "}
            <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
              SheCodes
            </a>{" "}
            and actively seeking and Internship where i can take my coding to
            the next level and contribute with a lot of creativity, drive and
            (almost annoyingly) strong determination to find solutions for all
            problems that may arise. Hire me.
          </p>
        </header>

        <Main />
        <footer>
          <img src={MLLogo} alt="logo" className="mlLogoSmall" />
          <p className="footer-text">
            16751 Bromma
            <br />
            matilda.hj.larsson@gmail.com
          </p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/matilda-larsson-0176a3289/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            <a
              href="https://github.com/MatildaHJ"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-github fa-2xl"></i>
            </a>
          </div>
          <small>
            This is an
            <a
              href="https://github.com/MatildaHJ/react-portfolio"
              className="gitLink"
              target="_blank"
              rel="noreferrer"
            >
              open source code
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
