import Visa from "../../../public/icones/Visa.svg";
import Mastecard from "../../../public/icones/Mastercard.svg";
import StyleFooter from "./style";
import Pix from "../../../public/icones/Pix.svg";

const Footer = () => {
    return(
        <StyleFooter>
            <figure>
                <img src={Visa} alt="Icone Visa"/>
                <img src={Mastecard} alt="Icone Mastecard"/>
                <img className="pix" src={Pix} alt="Icone Pix"/>
            </figure>
            <p>Todos os direitos reservados - 2021</p>
        </StyleFooter>
    )
}

export default Footer;