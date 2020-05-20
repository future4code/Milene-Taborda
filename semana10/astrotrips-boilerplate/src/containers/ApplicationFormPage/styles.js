import styled from 'styled-components';

export const ContainerForm = styled.div`
    height: 90vh;
    background: #fff;
    text-align: center;
    margin: 0 auto;

    h1 {
        padding-top: 145px;
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
       > div {
            display: grid;
            grid-template-columns: 100px 1fr;
            margin: 30px ;
            align-items: center;
            justify-content: center;
            text-align: center;
       } 

        select, label {
            display: inline;
            
       } 

       button {
            display: block;
            margin: 25px auto;
       }
       

     
       
    }   
`