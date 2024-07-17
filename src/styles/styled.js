import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0020b8;
  height: auto;
`;

export const ImageContainer = styled.img`
  width: 612px;
  height: 612px;
  object-fit: cover;

  @media (max-width: 1000px) {
    width: 336px;
    height: 336px;
    margin-left: 40px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 250px;

  @media (max-width: 1000px) {
    margin-right: 10%;
    margin-top: 40px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  max-width: 970px;
  margin: 0 auto;
  margin-top: 260px;
`;

export const TextTitle = styled.h1`
  width: 100%;
  height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 22px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const TextMusic = styled.div`
  width: 100%;
  height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 22px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 700px;
  margin-left: -40vh;
  margin-bottom: 2vh;

  @media (max-width: 2100px) {
    margin-left: -8vh;
  }

    @media (max-width: 1600px) {
    margin-left: 10vh;
  }



  @media (max-width: 1400px) {
    margin-left: 30vh;
  }

  @media (max-width: 1000px) {
    margin-left: 20vh;
  }

  @media (max-width: 600px) {
    margin-left: 13vh;
    width: 250px;
  }
`;

export const LogoImage = styled.img`
  position: absolute;
  width: 300px;
  margin-left: 100px;
  margin-bottom: 1100px;

  @media (max-width: 1000px) {
    margin-left: 1px;
    width: 250px;
  }
`;

export const AdContainer = styled.div`
  position: absolute;
  width: 975px;
  height: 88px;
  background-color: #f0f0f0;
  position: absolute;
  margin-left: 115px;
  margin-bottom: 750px;

  @media (max-width: 1000px) {
    width: 340px;
    height: 280px;
    margin-left: 1px;
    margin-bottom: 600px;
  }
`;

export const AdContainerBox = styled.div`
  width: 350px;
  height: 240px;
  background-color: #f0f0f0;
  position: absolute;
  margin-left: 750px;
  margin-top: 362px;

  @media (max-width: 1000px) {
    width: 340px;
    height: 280px;
    margin-left: 1px;
    margin-top: 1400px;
  }
`;
