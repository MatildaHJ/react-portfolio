import Navbar from "./Navbar";
import Main from "./Main";
import Language from "./Language";
import "./App.css";
import MLLogo from "./images/ML-logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Language />
        <Navbar />
        <div className="main-container">
          <header id="about">
            <p>
              Hello, I'm <strong>Matilda</strong>, a{" "}
              <strong>Front-end developer</strong> based in{" "}
              <strong>Stockholm</strong>, Sweden. I just finished my studies
              with{" "}
              <a
                href="https://www.shecodes.io/"
                target="_blank"
                rel="noreferrer"
              >
                SheCodes
              </a>{" "}
              and actively seeking a paid internship (Stockholm or remote) where
              I can take my programming game to the next level and find a
              like-minded coding fam. I can contribute with a lot of creativity,
              drive and an (almost annoyingly) strong determination to find
              solutions for ALL problems. I'm coding in VSCode and mostly
              focusing on <strong>React.js</strong> right now. I always want to
              learn new stuff though and I'm excited to keep adding things to my
              skills-list.
              <br /> Apart from being well on my way to becoming a real coding
              geek I also love dancing when no one is watching and have a
              massive sweet tooth.
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
