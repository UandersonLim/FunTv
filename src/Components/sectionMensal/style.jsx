import styled from "styled-components";

export const StyleSection = styled.section`
  display: flex;
  justify-content: center;
  width: 450px;
  height: 995px;
  background-color: #ffffff;
  background-image: url("Capitao.png");
  background-repeat: no-repeat;
  margin: 50px 0 20px 0;
  color: #ffffff;
  position: relative;
  padding: 10px;

  @media(max-width: 1550px){
    margin-bottom: 0;
  }


  h1 {
    text-align: center;
    margin: 80px 0 60px 0;
  }

  data {
    display: flex;
    justify-content: center;
    font-weight: bold;
  }

  h1,
  data {
    font-size: 36px;
    text-shadow: 0px 2px 0px rgba(255, 255, 255, 50%);
  }

  ul {
    margin-top: 80px;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    font-size: 17px;
  }

  ul li img{
    width: 24px;
    height: 24px;
  }

  .boxButon {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  @media(max-width: 1024px){
    border-bottom: 2px solid #696969;
    margin-bottom: 0;
  }

   @media(max-width: 600px){
      width: 350px;

      h1, data{
        font-size: 180%;
      }

      ul li{
        font-size: 95%;
      }
  }

  @media(max-width: 480px){
    width: 280px;

    h1, data{
        font-size: 150%;
      }

      ul li{
        font-size: 75%;
      }

  }
`;
