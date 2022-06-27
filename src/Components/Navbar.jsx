import React from 'react'
import { Search, ShoppingCartOutlined, FavoriteBorder, AccountCircle, Store, LocalShipping} from '@material-ui/icons'
import { Badge } from "@material-ui/core";
import styled from 'styled-components'


function Navbar() {
  return (
    <Container>
      <Wrapper>
        <UpWrapper>
          <Left>
            <Logo src="https://www.ikea.com/se/sv/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="IKEA LOGO"></Logo>
          </Left>
          <Center>
            <Search style={{ color: "black", fontSize: 22 }}/>
            <Input placeholder="Vad letar du efter"/>
            <span class="material-symbols-outlined"></span>
          </Center>
          <Right>
            <AccountCircle/><MenuItem>Logga in/Registrera dig</MenuItem>
            <MenuItem><FavoriteBorder/></MenuItem>
            <MenuItem>
              <Badge>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </UpWrapper>  
        <DownWrapper>
          <Time>
            <Info>Just nu</Info>
            <Info>Produkter</Info>
            <Info>Rum</Info>
          </Time>
          <Space></Space>
          <Car>
            <CarInfo>Ange postnummer</CarInfo>
            <CarInfo>Välj varuhus</CarInfo>
          </Car>
        </DownWrapper>
      </Wrapper>   
    </Container>
  )
}

const Container = styled.div`
  height: 150px;

`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

`
const UpWrapper = styled.div `
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
// Gives right, center, left flex 1 to gives them even space
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
// The text-align property specifies the horizontal alignment of text in an element.
const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  /* max-width: fit-content; */
  padding: 10px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 999px;
`
// flex end: items are packed toward to end line.
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`
const Logo = styled.img`
  object-fit: contain;
  height: 100%;

`
// ----------------------------------------
// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `
const Input = styled.input`
  border: none;
  padding: 10px;
  outline-width: 0;
  width: 100%;
  font-size: 1rem;
  color: #484848;
  

`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 600;

`
const DownWrapper = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Time = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  align-items: center;
`
const Space = styled.div`
  flex: 1;
  display: flex;
`
const Info = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 600;
`
const Car = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const CarInfo = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 600;
`

export default Navbar