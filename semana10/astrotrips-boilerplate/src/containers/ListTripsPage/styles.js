import styled from 'styled-components';

export const ListPageWrapper = styled.div`
    height: 90vh;
    background: #fff ;
    color: black;
    padding: 0 18px;

    > button {
        float: right;
        margin: 40px ; 
    }

    Header {
        position: absolute;
        border-bottom: solid 1px orange;
    }

    > h1 {
        padding-top: 150px;
        text-align: center;
    }
`

export const Main = styled.main`
    padding-top: 25px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style-type: none;
    margin: 0 auto;

     ul {

        > li {
            display: flex;
            flex-direction: column;
            background-image: linear-gradient(to top,  #fc9,  #fc6);
            border-radius: 4px;
            padding: 20px;

            > span {
            margin: 5px 0 20px;
        }
        }
        

        button {
            background: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            padding: 8px;

        }
    }
`