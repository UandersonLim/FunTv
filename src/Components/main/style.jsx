import styled from "styled-components";

const Stylesection = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  .box-button-test-free-two-hours {
    display: flex;
    justify-content: center;
  }

  .boxMessage {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: #E3B413;
    margin-bottom: 160px;

    p {
      width: 40%;
      text-align: center;
      font-size: 24px;
      font-weight: 600;
    }

  }
`;

const Divtext = styled.div`
  text-align: center;
  margin-top: 40px;
  font-weight: 600;
  color: #ffffff;
  font-size: 20px;

  @media (max-width: 748px) {
    font-size: 80%;
  }
`;

const ButtonTesteGratis = styled.button`
  width: 600px;
  height: 50px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 35px;
  border-radius: 5px;
  
  

  a {
    color: #000000;
  }

  @media (max-width: 748px) {
    width: 300px;
    font-size: 70%;
    font-weight: 700;
    background-color: #E3B413;

    a {
      color: #000000;
    }
  }
`;

const SectionPlanos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 90%;
  background-color: #fdfbfb;

  .planosFuntv {
    text-align: center;
    color: #000000;
    font-size: 20px;
    font-weight: 600;
    margin: 30px 0;
  }

  span {
    font-weight: bold;
  }

  .paragraphplans {
    /* background-color: #E3B413; */
    width: 648px;
    text-align: center;
    /* padding: 0 50px; */
    margin-top: 20px;
  }

  .boxLine {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .line1 {
    width: 465px;
    height: 5px;
    background-color: #23201d;
  }

  .line2 {
    width: 50px;
    height: 5px;
    background-color: #E3B413;
  }

  .boxPlans {
    display: flex;
    flex-wrap: wrap;
  }
  .linebox {
    width: 2px;
    margin-top: 50px;
    height: 995px;
    background-color: #696969;
  }

  .textInfor {
    width: 40%;
    margin-bottom: 180px;
  }

  .boxPlatforms {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .boxPlatforms li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: 300;
    border: 1px solid #000000;
    width: 350px;
    height: 85px;
    gap: 7px;
    margin-bottom: 50px;
  }

  .boxPlatforms img {
    width: 26px;
    height: 34px;
  }

  @media (max-width: 748px) {
    width: 80%;

    .planosFuntv{
      font-size: 95%;
    }

    .line1 {
      display: none;
    }

    .line2 {
      width: 70%;
    }

    .paragraphplans {
      /* background-color: #E3B413; */
      width: 90%;
      font-size: 100%;
      line-height: 25px;
      padding: 5% 2%;
    }

    .planosPrimeLink {
      font-size: 18px;
    }

    .textInfor{
      display: flex;
      flex-direction: column;
      font-size: 80%;
      width: 90%;
      margin: 0 50px;
    }
  }

 

  
  @media (max-width: 1024px) {
    .boxPlans {
      flex-direction: column;
      align-items: center;
    }

    .linebox {
      display: none;
    }

    .textInfor {
      margin-bottom: 50px;
      text-align: center;
      font-size: 90%;
    }
  }

  @media (max-width: 1550px){
    .boxPlans{
      justify-content: center;
    }
  }

  @media (max-width: 1280px) {
    
    .boxMessage{
      margin-bottom: 3rem;

      p{
        width: 80%;
      }
    }
    .boxPlatforms {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .boxPlatforms li{
      width: 80%;
    }
  }

/* <-------------------------------------------> */
  @media (max-width: 480px) {
    .boxMessage p {
      margin: 0 5px;
      font-size: 15px;
    }

    .boxPlatforms li{
      font-size: 120%;
    }

    .planosPrimeLink{
      font-size: 16px;
    }

    .textInfor{
      font-weight: 5px;
    }

    .paragraphplans{
      font-size: 90%;
    }
    
  }
`;

export { Stylesection, Divtext, ButtonTesteGratis, SectionPlanos };
