import styled from "styled-components";
import { Card as MuiCard, Button as MuiButton } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const CardBg = styled.div`
  width: 50%;
  height: 50%;
  flex-shrink: 0;
  border-radius: 2px;
  background: rgba(247, 248, 250, 0.80);
  backdrop-filter: blur(12px);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductShow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 60px;
`;

export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 50px auto;
`;

export const ListStyle = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
  font-size: 14px;
`;

export const ListItem = styled.li`
  padding: 5px 0;
  @media (max-width: 440px) {
    padding: 0px;
    font-size: 8px;
  }

`;  

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 80%;
`;



export const StyledCard = styled(MuiCard)`
  max-width: 300px;
  margin: 8px;
  &:hover {
    border: 1px solid;
    cursor: pointer;
    box-sizing: 'border-box'
  }
`;

export const StyledButton = styled(MuiButton)`
button{
margin-top: 40px;
color: white;
 font-size: 18px;
 font-family: Roboto;
 font-weight: 500;
 word-wrap: break-word;
 width: 100%; 
height: 100%; 
padding-left: 44px;
padding-right: 44px; 
background: #56B280; 
border-radius: 4px; 
justify-content: flex-start; 
align-items: flex-start; 
gap: 10px; 
display: inline-flex;
border: none;

@media (max-width: 440px) {
  padding-left: 24px;
padding-right: 24px;  
  }
}

`;

export const DetailProduct = styled.div`
  background-color: #F7F8FA;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;

`;

export const Icon = styled.i`
  font-size: 1.8rem;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 1.5rem;
  }

  @media (min-width: 961px) and (max-width: 1280px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1281px) and (max-width: 1920px) {
    font-size: 2.2rem;
  }
`;



