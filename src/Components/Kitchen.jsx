import React from 'react'
import styled from 'styled-components'

function Kitchen() {
  return (
    <Container>
        <Wrapper>
          <ImgContainer>
            <Image src="https://www.ikea.com/ext/ingkadam/m/1bd1eeb8199ba097/original/662042_mets03a_01_PH174289.jpg?f=xxl"/>
          </ImgContainer>
          <InfoContainer>
            <Info>
              <Title>15% på MAXIMERA lådor vid köp av komplett kök för minst 50.000:-</Title>
              <Desc>
                Passa på att fynda dina favoriter när vi har upp 
                till 50% på utvalda produkter, både i våra varuhus och online.
              </Desc>
              <Button>
                <ButtonText>Till erbjundandet</ButtonText>
              </Button>
            </Info>
          </InfoContainer>   
        </Wrapper>
    </Container>
  )
}

const Container = styled.div``

const Wrapper = styled.div`
  padding: 70px 30px;
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
`
const ImgContainer = styled.div`
  flex: 2;
  height: 70vh;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`;

const InfoContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: rgb(46, 108, 246);
`;

const Info = styled.span`
  padding: 40px;
  display: flex;
  flex-direction:column ;
`;

const Title = styled.h2`
  font-weight: bold;
  color: white;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: white;
`;

const Button = styled.button`
  font-weight: 100;
  font-size: 12px;
  padding: 0 12px;
  border: 0;
  padding: 15px;
  font-weight: bold;
  text-align: center;
  border-radius: 64px;
  width: 40%;
  background-color: black;
  cursor: pointer;
`;
const ButtonText = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: white;
`;


export default Kitchen