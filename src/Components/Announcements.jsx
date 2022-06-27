import styled from "styled-components"


function Announcement() {
  return (
    <Container>Rea på IKEA! Upp till 50% på utvalda produkter. Till rean ></Container>
  )
}

const Container = styled.div`
  height: 38px;
  background-color: #111;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 14px;
`

export default Announcement