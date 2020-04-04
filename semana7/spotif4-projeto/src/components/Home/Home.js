import React from 'react';
import styled from 'styled-components';
// import { Container } from './styles';

export default function Home() {
  return (
    <>
    <Div>
             <h1>Recomendações</h1> 
            <VerTudo>VER TUDO</VerTudo>
        <DivPlaylist>
                    <ContainerPl>
                    <Img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3bzkFzXbGNN9QUVWKwnc1XEZSYA-TYqp5yK2iFZtm740dboS1&usqp=CAU'} />
                        <p>Black Sabbath</p>
                        <small>These songs rocked the 90s.</small>
                    </ContainerPl >

                    <ContainerPl>
                    <Img src={'https://static.mercadoshops.com/poster-capa-gigante-banda-rock-iron-maiden-album-the-trooper_iZ42662286XvZxXpZ1XfZ28632307-669120606-1.jpgXsZ28632307XuZ1xIM.jpg'} />
                        <p>Iron Maiden</p>
                        <small>These songs rocked the 90s.</small>
                    </ContainerPl >

                    <ContainerPl>
                    <Img src={'https://i.pinimg.com/originals/48/51/ce/4851ceb41ffd1f5f35d5735e6af3ffb0.jpg'} />
                        <p>Ramones</p>
                        <small>These songs rocked the 90s.</small>
                    </ContainerPl >

                    <ContainerPl>
                    <Img src={'https://cademeuwhiskey.files.wordpress.com/2013/04/bonj.jpg'} />
                        <p>Bon Jovi</p>
                        <small>These songs rocked the 90s.</small>
                    </ContainerPl >
        </DivPlaylist>
        </Div>

        <Div>
             <h1>Não saem dos seus ouvidos</h1> 
            <VerTudo>VER TUDO</VerTudo>
        <DivPlaylist>
                    <ContainerPl>
                    <Img src={'https://conteudo.imguol.com.br/blogs/107/files/2015/06/bad-magic.jpg'} />
                        <p>Motorhead</p>
                        <small>These songs rocked the 90s.</small>
                    </ContainerPl >

                    <ContainerPl>
                    <Img src={'https://i.pinimg.com/originals/73/6f/3a/736f3adc79bf3ba3bf76986a378b91ac.jpg'} />
                        <p>Kansas</p>
                        <small>These songs rocked the 90s.</small>
                    </ContainerPl >

                    <ContainerPl>
                    <Img src={'https://www.dawsons.co.uk/blog/wp-content/uploads/2013/07/nirvana-in-utero.jpg'} />
                        <p>Nirvana</p>
                        <small>These songs rocked the 90s.</small>
                    </ContainerPl >

                    <ContainerPl>
                    <Img src={'https://http2.mlstatic.com/kit-5-quadros-capa-de-discos-bandas-de-rock-frete-gratis-D_NQ_NP_987236-MLB25858031726_082017-F.jpg'} />
                        <p>Pear Jam</p>
                        <small>These songs rocked the 90s.</small>
                    </ContainerPl >
        </DivPlaylist>
        </Div>

        
    </>
  );
}

const DivPlaylist = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 250px);
    grid-template-rows: 220px;
`

const ContainerPl = styled.div`
    background: #1C1C1C;
    text-align: center;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    line-height: 0.5;
    line-height: 0;
`

const Img = styled.img`
      height: 150px;
      width: 100%;
`
const VerTudo = styled.div`
    margin-left: 60vw;
    margin-bottom: 15px;
`
const Div = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 15px;
`