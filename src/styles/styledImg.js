import styled from "styled-components";

export const GridContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 755px;
  margin-bottom: 255px;
  width: 340px;
  height: 350px;


  @media (max-width: 1000px) {
  margin-left: 1px;
  margin-top: 50%;
  margin-top: 1000px;

  }

`;

export const ImageGrid = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ImageContainerGrid = styled.img`
  width: 168px;
  height: 175px;
  object-fit: cover;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  display: block;
`;
