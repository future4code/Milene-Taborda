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
    
   > div {
        
        > h1 {
            padding-top: 150px;
            text-align: center;
        }
    }

    section {
    padding: 5vh 15vw;
    display: flex;
   }
    
    input {
        padding: 5px 10px;
        border-radius: 5px;
        border: solid 1px #f96;
        width: 500px;
    }

    form {
        margin-left: 150px;

       > div {
            display: grid;
            grid-template-columns: 150px 1fr;
            margin: 30px ;
            align-items: center;
            justify-content: center;
            text-align: center;
       } 

        select {
           width: 250px;
        }


       button {
            display: block;
            margin: 25px 355px;
       }
    }
`