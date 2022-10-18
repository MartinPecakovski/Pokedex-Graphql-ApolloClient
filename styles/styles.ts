import styled from "styled-components";

export const SingleWrapper = styled.div`

  padding-top: 50px;
  text-transform: capitalize;
  background-image:linear-gradient(rgba(0, 0, 0 ,0.1), rgba(0, 0, 0 ,0.1)), url("https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/forest.jpg");
  background-size: cover;
  background-position: bottom;
 padding-bottom: 100px;

  
`;

export const WrapperInner = styled.div`
width: 80%;
margin-left: auto;
margin-right: auto;
  color: white;

`;

export const ImageWrapper = styled.div`
&:hover span img{
  scale: 1.12;
  transition: all 0.5s ease-out;
  z-index: 1000;
}
`;

export const DetailsPokemon = styled.div`

margin-left: auto;
margin-right: auto;
  font-size: 20px;
  text-align: center;
  padding: 25px;
  background-color: #30a7d7;
  border-radius: 10px;
 
  
    &:hover{
  scale: 1.12;
  transition: all 0.5s ease-in-out;
  z-index: 100;

  
}
`;

export const DexHeading = styled.h1`
  margin-top: 0;
  font-size: 60px;
  text-align: center;
`;
export const Heading = styled.h3``;

export const Div = styled.div``;

export const ArticleLoading = styled.div``;

export const DivLink = styled.div`
background-image: linear-gradient(rgba(0,0,0,0.13), rgba(0,0,0,0.13)), url("https://i.pinimg.com/736x/e8/03/c8/e803c8f229eaa547e81c6bc1fa287817--pokemon-watch-play-pokemon.jpg");
background-size: cover;

  border: 1px solid gray;
  border-radius: 10px;
  text-align: center;
  gap: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  
  &:hover{
    scale: 1.02;
    transition: all 0.3s ease-in-out;
    border: 1.5px solid black;
background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url("https://i.pinimg.com/736x/e8/03/c8/e803c8f229eaa547e81c6bc1fa287817--pokemon-watch-play-pokemon.jpg");
    
  }
  &:hover img, &:hover span{
    scale: 1.08;
    transform: rotate(180deg);
    z-index: 10;
    transition: all 0.8s ease-in-out;
  }
`;
