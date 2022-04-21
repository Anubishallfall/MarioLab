import styled from "styled-components";
import ConfiguracaoSistema from "../../config/config"


export const Body = styled.div`
width: 100%;
height: ${ConfiguracaoSistema.tela.tamanho.height}px;
background: ${props => `url(${props.background}) no-repeat top center`};
background-size: auto;
display: flex;
flex-direction: column;
align-items: center;
`;
export const Main = styled.div`
width: 100%;
height: 80%;
display: flex;
flex-direction: column;
align-items: center;
`;
export const Header = styled.div`
width: 100%;
height: 10%;
align-items: center;
display: flex;
background-color:  orange;
`;
export const Foother = styled.div`
width: 100%;
justify-content: center;
align-items: center;
height: 10%;
display: flex;
`;
export const Form = styled.form`
width: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 800px) {
    width: 100%;
    }
`;
export const DivCaluclar = styled.div`
display: flex;
justify-content: space-between;
width: 60%;
margin-top: 5px;
@media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    }
`;
export const DivResultado = styled.div`
width: 70%;
height: 30px;
max-width: 70%;
display: flex;
justify-content: start;
align-items: center;
@media (max-width: 800px) {
justify-content: center;
    }
`;


export const Input = styled.input`
width: 60%;
padding: 5px;
margin-top: 5px;
`;
export const Button = styled.button`
color:#fff;
border: none;
background-color: orange;
padding: 5px 15px;
cursor: pointer;
&:hover{
    background-color: #ffd000
}
`;
export const P = styled.p`
font-size: 12px;
`;
export const Img = styled.img`
width: 50px;
height: 50px;
`;
export const H1 = styled.h1`
font-size: 24px;
color: #fff;
`;
export const Copy = styled.p`
font-size: 12px;
`;

