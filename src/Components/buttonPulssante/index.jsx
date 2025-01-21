import StyleButton from "./style";

const ButtonWhatApp = () => {
  return (
    <StyleButton>
      <a href="https://api.whatsapp.com/send?phone=5551996435325&text=Ol%C3%A1%21%20Vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20testar." target="_blank">
        <img
          src="icones/Whatsapp.png"
          alt="Icone WhatsApp"
          title="Fale com Atendente"
        />
      </a>
    </StyleButton>
  );
};

export default ButtonWhatApp;
