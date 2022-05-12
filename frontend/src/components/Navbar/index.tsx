import { ReactComponent as Vetor } from "assets/img/Vector.svg";
import "./style.css";
function Navbar() {
  return (
    <header>
      <nav className=" container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/Lucianoneves">
            <div className="dsmovie-contact-container">
              <Vetor />
              <p className="dsmovie-contact-link">/devsuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
