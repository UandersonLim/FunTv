import { StyleSection } from "./style";
import Check from "/icones/check.svg";
import Button from "./button";

const ComponentBimestral = () => {
  return (
    <StyleSection>
      <div className="boxBlack"></div>
      <div>
        <h2>Bimestral</h2>
        <data value="45.00">R$ 45,00</data>
        <ul>
          <li>
            <img src={Check} alt="Icone check" />+ 1 Tela de brinde
          </li>
          <li>
            <img src={Check} alt="Icone check" />
            +60.000 Contéudos
          </li>
          <li>
            <img src={Check} alt="Icone check" />
            Qualidade 4k/FHD/HD/SD
          </li>
          <li>
            <img src={Check} alt="Icone check" />
            Assista no smartphone/Tablet
          </li>
          <li>
            <img src={Check} alt="Icone check" />
            Assista no smart TV
          </li>
          <li>
            <img src={Check} alt="Icone check" />
            Assista no computador
          </li>
          <li>
            <img src={Check} alt="Icone check" />
            Assista no TV BOX/Chromecast
          </li>
          <li>
            <img src={Check} alt="Icone check" />
            Programação adultos(Opcional)
          </li>
        </ul>
        <div className="boxButon">
          <Button />
        </div>
      </div>
    </StyleSection>
  );
};

export default ComponentBimestral;
