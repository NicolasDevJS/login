import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 9%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayButton = styled.button`
  position: absolute;
  color: #fff;
  border: none;
  border-radius: 100%;
  margin-bottom: 0vw;
  margin-right: 50vw;
  background-color: transparent;
  transition: box-shadow 0.3s ease-in-out;
  width: 75px;
  height: 70px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 100%;
    background-color: #fff;
    border: 3px solid red;
  }

    @media (max-width: 1000px) {
  margin-right: 65vw;
  }
`;
