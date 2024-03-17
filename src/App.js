import Navbar from "./Navbar";
import Main from "./Main";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />

        <header id="about">
          <p>
            Hello, my name is Matilda, an aspiring Front-end developer based in
            Stockholm, Sweden. I'm just finishing up the last part of my studies
            with
            <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
              SheCodes Max
            </a>
            and actively seeking and Internship where i can take my coding to
            the next level and contribute with a lot of creativity, drive and
            determination to find solutions for all problems that may arise.
            Hire me.
          </p>
        </header>

        <Main />
        <footer>
          <div class="container">
            <img src="src/images/ML-logo.png" alt="logo" class="mlLogoSmall" />
            <p class="footer-text">
              16751 Bromma
              <br />
              matilda.hj.larsson@gmail.com
            </p>

            <small>
              This is an
              <a
                href="https://github.com/MatildaHJ/react-portfolio"
                class="gitLink"
                target="_blank"
                rel="noreferrer"
              >
                open source code
              </a>
            </small>
          </div>
        </footer>
      </div>
    </div>
  );
}
