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
              Hej, <strong>Matilda</strong> här, en junior
              <h1>
                <strong>Frontend-utvecklare</strong>
              </h1>{" "}
              i <strong>Stockholm</strong>. Jag har just nu praktik på webbyrån{" "}
              <a href="https://rhymesthlm.se/" target="_blank" rel="noreferrer">
                Rhyme
              </a>
              , efter ett omfattande kod-bootcamp med{" "}
              <a
                href="https://www.shecodes.io/"
                target="_blank"
                rel="noreferrer"
              >
                SheCodes
              </a>
              . Jag söker nu en arbetsplats som är lite som en kod-familj, där
              jag kan ta mina kunskaper till nästa nivå och bidra med mycket
              kreativitet, driv och en (nästan lite irriterande) stark
              beslutsamhet att alltid hitta lösningar till alla problem.
            </p>
            <p className="mt-3">
              Jag kodar i VS code och har jusst nu mest fokus på Astro och
              React. Vill dock aldrig sluta att lära mig saker och ser fram emot
              att lägga till mycket mer på kompetenslistan.
            </p>

            <p>
              Förutom att skriva kod gillar jag också att sy och att
              hobby-tatuera mina vänner. Och croissanter. Älskar croissanter.
            </p>
          </header>

          <Main isNight={isNight} />
        </div>
      </div>
      <Footer isNight={isNight} />
    </div>
  );
}
