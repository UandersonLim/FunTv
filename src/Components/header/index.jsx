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
                <li><a href="https://w.app/bzC4im" target="_blank">Contato</a></li>
            </ul>
            <MenuHamburgue/>
        </StyleHeader>
    )
}

export default Header;