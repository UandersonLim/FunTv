import styled from "styled-components";

const StyleMenuHamburguer = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    width: 30px;
    flex-direction: column;
    gap: 6px;
    margin-right: 1rem;
    transition: 0.2s;
    cursor: pointer;

    .line {
      background-color: #E3B413;
      width: 100%;
      height: 2px;
    }
  }
`;

export { StyleMenuHamburguer };
