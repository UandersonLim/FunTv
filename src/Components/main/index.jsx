import {
  Stylesection,
  Divtext,
  ButtonTesteGratis,
  SectionPlanos,
} from "./style";
import ComponentMensal from "../sectionMensal";
import ComponentTrimestral from "../sectionTrimestral";
import ComponentBimestral from "../sectionBimestral";

import App from "../../../public/icones/App.svg";
import Android from "../../../public/icones/android.svg";
import Google from "../../../public/icones/chrome.svg";

const Main = () => {
  return (
    <Stylesection>
      <div>
        <Divtext>DISPONIBILIZAMOS UM TESTE GRÁTIS DE 03 HORAS!</Divtext>
      </div>
      <div className="box-button-test-free-two-hours">
        <ButtonTesteGratis>
          <a
            href="https://api.whatsapp.com/send?phone=5551996435325&text=Ol%C3%A1%21%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20testar."
            target="_blank"
          >
            CLIQUE AQUI PARA SOLICITAR SEU TESTE GRÁTIS!
          </a>
        </ButtonTesteGratis>
      </div>

      <SectionPlanos id="planos">
        <p className="planosFuntv">Conheça nossos planos Fun TV</p>

        <div className="boxLine">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>

        <p className="paragraphplans">
          A <span>Fun TV</span> oferece as melhores <span>listas IPTV</span> do{" "}
          <span>mercado brasileiro</span> com atendimento ao cliente e suporte
          para configurações dos nossos planos
        </p>
        <div className="boxPlans">
          <ComponentMensal />
          <div className="linebox"></div>
          <ComponentBimestral />
          <div className="linebox"></div>
          <ComponentTrimestral />
        </div>
        <p className="textInfor">
          <span>Informações importantes: </span>Para retirada de canais adultos
          da lista, deve ser solicitado a exclusão da sua lista. Caso necessario
          contate nossa equipe.
        </p>
        <div className="boxMessage">
          <p>
            Uma nova forma de assistir TV quando e onde quiser, por um valor
            super acessível.
          </p>
        </div>
        <ul className="boxPlatforms" id="compatibilidade">
          <li>
            <img src={App} alt="Icone APP" />
            App Store
          </li>
          <li>
            <img src={Android} alt="Icone Android" />
            Google Player
          </li>
          <li>
            <img src={Google} alt="Icone Web Player" />
            Web Player
          </li>
        </ul>
      </SectionPlanos>
    </Stylesection>
  );
};

export default Main;
