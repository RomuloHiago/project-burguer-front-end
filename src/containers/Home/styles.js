import styled from "styled-components";


export const Container = styled.div`
  background-image: linear-gradient( #28002deb ,#000000);
  height: 100vh; /* Define a altura como 100% da viewport height na tela toda */
  margin: 0; /* Remove as margens padrão */
  padding: 0; /* Remove o preenchimento padrão */

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  margin-top: 10px;
  background:none
`;


export const H1 = styled.h1`
background:none;
`;

export const ContainerItens = styled.div`
margin-top: 25px;
      background:linear-gradient(180.00deg,
        rgb(66 127 13 / 59%) 1.6%,
        rgb(21 107 11 / 43%) 17.6%,
        rgb(13 22 9 / 52%) 63%);
    border-radius: 61px 61px 0px 0px;

    padding: 50px 25px;
    display: flex;
    flex-direction: column;
    min-width: 250px;
  
  /* Adiciona o estilo ao H1 */
  & > H1 {
        background: none; /* Remove o background */
        text-align: center; /* Centraliza o texto */
        display:flex;
        margin: auto; /* Centraliza o texto H1 verticalmente */
        margin-bottom: 70px;
    }
`;



export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #eeeeee;
  align-self: start;
  margin-left: 40px;
  background:none
`;

export const Input = styled.input`
  margin-top:5px;
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  margin-bottom: 42px;
  outline: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 21px;
  color: #ffffff;
  padding: 19px;

  ::placeholder {
    color: #c7c7c7;
  }
`;