import { motion } from "framer-motion";
import "./style.css"

const MenuMobile = (props) => {
  return (
      <motion.nav className={props.class}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "0%", "0%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1
      }}
      >
        <ul className="list">
          <li>
            <a href="#planos">Planos</a>
          </li>
          <li>
            <a href="#compatibilidade">Compatibilidade</a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5551996435325&text=Ol%C3%A1%21%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20testar."
              target="_blank"
            >
              Contato
            </a>
          </li>
        </ul>
      </motion.nav>
  );
};

export default MenuMobile;
