import styled from 'styled-components';
import background from '../../assets/images/3158778.png';
import Button from "@material-ui/core/Button";


export const HomeWrapper = styled.div`
    height: 90vh;
    background: #fff url(${background}) no-repeat top right;
    background-size: 65%;
    color: black;
    padding: 0 18px;
`
export const Main = styled.div`
    padding-top: 220px;
    width: 400px; 
    margin: 0 25px;
    text-align: center;

    > h1 {
        font-family: 'Comfortaa', cursive;
        font-weight: 300;
        font-size: 20px;
        
    }

    > h2 {
        font-family: 'Alfa Slab One', cursive;
        font-weight: 500;
        color: orange;
        font-size: 35px;
    }

    > h3 {
        font-family: 'Homemade Apple', cursive;
        font-size: 20px;
    }

    > h3, p {
        margin-bottom: 15px;
    }

    p {
        text-align: left;
        text-align: justify;
    }

    > Button {
        margin: 15px;
    }

`

export const ButtonLogin = styled(Button)`
    color: #131313;
`