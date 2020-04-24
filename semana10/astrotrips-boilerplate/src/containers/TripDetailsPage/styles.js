import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    min-height: 95vh;
    max-height: 100%;
    background: #fff ;
    color: black;
    padding: 0 18px;

    > button {
        float: right;
        margin: 40px ; 
    }

    > p {
        margin: 10px 0;
    }

    h1 {
        padding-top: 80px;
        text-align: center;
        margin-bottom: 15px;
    }

    div {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 0.1fr 1fr;
        background: #eee;
        border-radius: 10px;

        p {
            background: lightgrey;
            margin: 2px 0; 
            padding: 5px;
            border-radius: 10px;
        }

        button {
            width: 100px;
            margin-top: 5px;
        }
    }

    h3 {
        margin-top: 30px;
    }
`