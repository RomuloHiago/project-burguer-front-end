import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(#28002deb, #000000);
`;

export const Image = styled.img`
  margin-top: 10px;
  background: none
`;

export const ContainerItens = styled.div`
  padding: 25px 36px 50px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;


  & > H1 {
        background: none; /* Remove o background */

    }
`;

export const User = styled.li`
  list-style: none;
`;

export const Order = styled.div`
  width: 342px;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  margin-bottom: 16px;
`;

export const ParagraphOrder = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
    margin: 0;
    padding: 0;
    background:rgba(255, 255, 255, 0.25);
  }

  span.pedido {
    background:none;
    color: #d93856; /* Cor desejada para "Pedido:" */
    font-weight: bold; /* torna o texto em negrito */
    font-size: 20px; /* aumenta o tamanho da fonte */
  }

  span.cliente {
    background:none;
    color: #d93856; /* Cor desejada para "Cliente:" */
    font-weight: bold; /* torna o texto em negrito */
    font-size: 20px; /* aumenta o tamanho da fonte */
  }
`;

export const TrashOrder = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  img {
    background: transparent;
  }
`;
