import styled from 'styled-components';

export const CreateTripWrapper = styled.div`
    height: 90vh;
    background: #fff ;
    color: black;
    padding: 0 18px;
    text-align: center;

    > Header {
        position: absolute;
        border-bottom: solid 1px orange;
    }

    > button {
        float: right;
        margin: 40px ; 
    }
    
    div {
        > h1 {
            padding-top: 150px;
            text-align: center;
        }
    }
`