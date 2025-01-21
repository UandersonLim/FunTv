import { StyleSection } from "./style";
import Check from "/icones/check-branco.svg";
import Button from "./button";

const ComponentTrimestral = () => {
  return (
    <StyleSection>
      <div className="boxBlack"></div>
      <div>
        <h2>Trimestral</h2>
        <data value="35.00">R$ 70,00</data>
        <ul>
          <li>
            <img src={Check} alt="Icone check" />2 Telas
          </li>
          <li>
            <img src={Check} alt="Icone check" />
            Uma infinidade de Canais
          </li>
          <li>
            <img src={Check} alt="Icone check" />
            Filmes e Seriés atualizados
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
            Assista no computador/notebook
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

export default ComponentTrimestral;
