import styled from "styled-components";

export const StyleSection = styled.section`
  display: flex;
  justify-content: center;
  width: 450px;
  background-color: #ffffff;
  margin: 50px 0 20px 0;
  box-shadow: inset 0 0 0 10px #000000;
  background-image: url("Fun.png");
  background-repeat: no-repeat;
  color: #ffffff;
  position: relative;
  padding: 10px;

  @media(max-width: 1550px){
    margin-bottom: 0;
  }


  h2 {
    text-align: center;
    margin: 80px 0 60px 0;
  }

  data {
    display: flex;
    justify-content: center;
    font-weight: bold;
  }

  h2,
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

  .boxButon{
    display: flex;
    width: 100%;
    justify-content: center;
  }

  button{
    background-color: #ffffff;
    
  }

  @media(max-width: 1024px){
    margin-top: 0;
  }

   @media(max-width: 600px){
      width: 350px;
      background-size: cover;
      background-position: center;

      h1, data{
        font-size: 180%;
      }

      ul li{
        font-size: 95%;
      }
  }

  @media(max-width: 480px){
    width: 280px;
    background-position: 30%;

    h1, data{
        font-size: 150%;
      }

      ul li{
        font-size: 75%;
      }

  }
 

  
`;
