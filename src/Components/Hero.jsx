import styled from "styled-components";

function Hero() {
  return (
    <Container>
      <Con>
      <Ins>
        En värld av inspiration för ditt hem
      </Ins>
      <Logo src="https://www.ikea.com/se/sv/static/ikea-logo.f7d9229f806b59ec64cb.svg" alt="IKEA LOGO"></Logo>
      </Con>
      <Ikea>
      </Ikea>
    </Container>
  )
}

const Ikea = styled.div`
  width: auto;
  height: 25rem;
  background: 
    url("https://www.ikea.com/global/en/images/footer-daylight.svg");
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
`;

const Logo = styled.img`
  height: 100%;
  width: 9.5625rem;
  object-fit: contain;
`

const Container = styled.div`
`;

const Ins = styled.h1`
  font-size: 35px;
  font-weight: 600;
`
const Con = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`

export default Hero