import StyleHeader from "./style";
import MenuHamburgue from "../MenuHamburgue";

const Header = () => {
    return(
        <StyleHeader>
            <figure>
                <img src="Logo.png" alt="Logo"/>
            </figure>

            <ul>
                <li className="plans"><a href="#planos">Planos</a></li>
                <li><a href="#compatibilidade">Compatibilidade</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5551996435325&text=Ol%C3%A1%21%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20testar." target="_blank">Contato</a></li>
            </ul>
            <MenuHamburgue/>
        </StyleHeader>
    )
}

export default Header;