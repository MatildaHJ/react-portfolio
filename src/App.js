import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  const currentHour = new Date().getHours();
  const isNight = currentHour >= 19 || currentHour < 7;

  return (
    <div
      className="App"
      style={{ backgroundColor: isNight ? "#2b232d" : "#857C87" }}
    >
      <div className="container">
        <Navbar isNight={isNight} />
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
              <br /> Apart from this interest in writing code, I also like to
              tattoo my friends and I have a massive sweet tooth.
            </p>
          </header>

          <Main isNight={isNight} />
        </div>
      </div>
      <Footer isNight={isNight} />
    </div>
  );
}
