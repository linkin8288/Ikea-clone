import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container>
        <Wrapper>
          <InfoContainer>
            <Info>
              <Title>Nu är det rea på IKEA!</Title>
              <Desc>
                Passa på att fynda dina favoriter när vi har upp 
                till 50% på utvalda produkter, både i våra varuhus och online.
                <Date>
                  Gäller 20/6 - 3/7 2022, så långt lagret räcker.
                </Date>
              </Desc>
              <Button>
                <ButtonText>Se all rea har</ButtonText>
              </Button>
            </Info>
          </InfoContainer>
          <ImgContainer>
            <Image src="https://www.ikea.com/images/rea-pa-ikea-f9a145fff84c7804b5f64ba9b8f7b15e.jpg?f=xxxl"/>
          </ImgContainer>
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
  border-top: 1px solid gray;
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

const Date = styled.p`
  margin: 20px 0px;
  color: white;
  font-style: oblique;
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
  cursor: pointer;
`;
const ButtonText = styled.span`
  font-weight: bold;
  font-size: 12px;
`;


export default Home