import React from 'react'
import styled from 'styled-components'

function Card() {
  return (
    <Container>
      <Wrapper>
        <CardContainer>
          <CardText>
            <CardTitle>Älskade sommar!</CardTitle>
            <CardDesc>
              Har du också räknat dagarna? Till morgondoppet, sovmorgonen och grönskan utanför 
              fönsterna? Hos oss hittar du tips och inspiration för de sköna sommardagarna därhemma.
            </CardDesc>
          </CardText>
          <Button>
            <ButtonText>
              Hitta allt och lite till för sommaren
            </ButtonText>
          </Button>
        </CardContainer>
        <CardImg>
          <Image src="https://www.ikea.com/ext/ingkadam/m/29b5a22732178838/original/PH177433.jpg?f=xxl"/>
          <Image src="https://www.ikea.com/ext/ingkadam/m/74b806e9b5054bcc/original/PH183953-crop001.jpg?f=xxl"/>
        </CardImg>
        <CardContainer>
          <CardText>
            <CardTitle>Älskade sommar!</CardTitle>
            <CardDesc>
              Har du också räknat dagarna? Till morgondoppet, sovmorgonen och grönskan utanför 
              fönsterna? Hos oss hittar du tips och inspiration för de sköna sommardagarna därhemma.
            </CardDesc>
          </CardText>
          <Button>
            <ButtonText>
              Hitta allt och lite till för sommaren
            </ButtonText>
          </Button>
        </CardContainer>
        <ImgSection>
          <CardImgFor>
            <ImageFor src="https://www.ikea.com/ext/ingkadam/m/42db56d4044779f8/original/PH160510.jpg?f=s"/>
            <ForInfo>
              <ForTitle>För sommarens speciella tillfällen </ForTitle>
              <ForText>
                Oavsett vad det är för bjudning, gedukning lite extra kärlek.
                Vi har samlat några ideer som kan göra din speciella dag extra minnesvärd.
                STORHET champagnecoupe, klarglas, 30 cl29.
              </ForText>
            </ForInfo>
          </CardImgFor>
          <CardImgFor>
            <ImageFor src="https://www.ikea.com/images/arkitektskiss-pa-magasin-405-av-ikea-pa-h22-3863c51345db07837195af023ecafd44.jpeg?f=s"/>
            <ForInfo>
              <ForTitle>Följ med IKEA under H22 City Expo </ForTitle>
              <ForText>
                Oavsett vad det är för bjudning, gedukning lite extra kärlek.
                Vi har samlat några ideer som kan göra din speciella dag extra minnesvärd.
                STORHET champagnecoupe, klarglas, 30 cl29.
              </ForText>
            </ForInfo>
          </CardImgFor>
          <CardImgFor>
            <ImageFor src="https://www.ikea.com/images/sommarmeny-2ce4d1d8cb9a90fcb0dff03d5803b417.jpg?f=s"/>
            <ForInfo>
              <ForTitle>Sommarmeny 89:-</ForTitle>
              <ForText>
                Oavsett vad det är för bjudning, gedukning lite extra kärlek.
                Vi har samlat några ideer som kan göra din speciella dag extra minnesvärd.
                STORHET champagnecoupe, klarglas, 30 cl29.
              </ForText>
            </ForInfo>
          </CardImgFor>
        </ImgSection>
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
`
const CardContainer = styled.div`
  padding: 30px 30px;
  justify-content: center;
  align-items: center;
  display: flex;
`
const CardText = styled.div`
  flex: 1;
`
const CardTitle = styled.h1`

`
const CardDesc = styled.p`
  margin: 20px 0px;
  color: gray;

`
const Button = styled.button`
  font-weight: 100;
  font-size: 12px;
  padding: 0 12px;
  border: 1px solid black;
  padding: 15px;
  font-weight: bold;
  text-align: center;
  border-radius: 64px;
  width: 26%;
  cursor: pointer;
`;
const ButtonText = styled.span`
  font-weight: bold;
  font-size: 12px;
`;
const CardImg = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  overflow: hidden;
  cursor: pointer;
`
const Image = styled.img`
  object-fit: cover;
  width: 50%;
  height: 50%;
`
 const ImgSection = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
  /* padding: 5px 30px; */
 `
const CardImgFor = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  cursor: pointer;
`
const ImageFor = styled.img`
  object-fit: cover;
  min-width: 200px;
  max-height: 360px;
  overflow: hidden;
  width: 100%;
`
const ForInfo = styled.div`
  margin-top: -9px;
  padding: 20px;
  padding-top: 20px;
  border: 1;
  background-color: #F57EB6;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 360px;
`
const ForTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;
  `
const ForText = styled.h4`
  font-size: 16px;
  font-weight: 300;
  margin-top: 8px;
  margin-bottom: 8px;
  line-height: 30px;
  `
export default Card
