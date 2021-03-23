import React from "react";
import Codepen from "../Assets/png/codepen.png";
import Github from "../Assets/png/github.png";
import LinkedIn from "../Assets/png/linkedin.png";
import Medium from "../Assets/png/medium.png";
import Vimeo from "../Assets/png/vimeo.png";

const Footer = () => {
  return (
    <footer>
        <p>&copy;Demetrio Lima 2021</p>

      <section className="link-icons">
        <a href="https://www.linkedin.com/in/demetrioalima/">
          <img src={LinkedIn} alt="LinkedIn" width="20px" height="20px" />
        </a>

        <a href="https://github.com/metrio">
          <img src={Github} alt="Github" width="20px" height="20px" />
        </a>

        <a href="https://demetrio-lima.medium.com/">
          <img src={Medium} alt="Medium" width="20px" height="20px" />
        </a>

        <a href="https://codepen.io/metrio">
          <img src={Codepen} alt="Codepen" width="20px" height="20px" />
        </a>

        <a href="https://vimeo.com/dlima">
          <img src={Vimeo} alt="Vimeo" width="20px" height="20px" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
