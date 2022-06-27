import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
// import { mobile } from "../responsive";

// Left, Center, Right components
// Left has Logo, Desc, Social Icons
// Center has Title, list
// Right has contact information, bank cards.
const Footer = () => {
  return (
    <Container>
      <One>
        <Title>Gå med i IKEA Family</Title>
        <List>
          <ListItem>
            Ge dina idéer nytt liv med erbjudanden, 
            inspiration och massor av aktiviteter i våra varuhus - helt kostnadsfritt.
          </ListItem>
        </List>
        <Title>IKEA för företag</Title>
        <List>
          <ListItem>
            Våra företagsexperter hjälper till med flexibla, 
            prisvärda och mer hållbara lösningar.
          </ListItem>
        </List>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </One>
      <Two>
        <Title>Ditt IKEA Family</Title>
        <List>
          <ListItem>Logga in</ListItem>
          <ListItem>Min inköpslista</ListItem>
          <ListItem>Följ min order</ListItem>
        </List>
      </Two>
      <Three>
        <Title>Handla på IKEA</Title>
        <List>
          <ListItem>Varuhus & öppettider</ListItem>
          <ListItem>Betalningsalternativ</ListItem>
          <ListItem>Leveransalternativ</ListItem>
          <ListItem>Personlig planering</ListItem>
          <ListItem>Planeringsverktyg</ListItem>
          <ListItem>Hela sortimentet</ListItem>
          <ListItem>Produktguider</ListItem>
          <ListItem>Broschyrer</ListItem>
          <ListItem>Presentkort</ListItem>
          <ListItem>Restaurangen</ListItem>
        </List>
      </Three>
      <Four>
        <Title>Kundservice</Title>
        <List>
          <ListItem>Kundservice</ListItem>
          <ListItem>Vanliga frågor</ListItem>
          <ListItem>Servicetjänster</ListItem>
          <ListItem>Retur & reklamation</ListItem>
          <ListItem>Reservdelar</ListItem>
          <ListItem>Köp & leveransvillkor</ListItem>
          <ListItem>Ge IKEA feedback</ListItem>
        </List>
      </Four>
      <Five>
        <Title>Det här är IKEA</Title>
        <List>
          <ListItem>Jobba på IKEA</ListItem>
          <ListItem>Vanliga frågor</ListItem>
          <ListItem>En mer hållbar vardag</ListItem>
          <ListItem>IKEA Museum</ListItem>
          <ListItem>Livet hemma</ListItem>
          <ListItem>Klimat och hållbarhet</ListItem>
          <ListItem>IKEA Foundation</ListItem>
          <ListItem>Socialt ansvar</ListItem>
          <ListItem>Om oss</ListItem>
          <ListItem>Pressrum</ListItem>
        </List>
      </Five>
      {/* <Six>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Six> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 500px;
  background-color: #0058a3;
  color: white;
`

const One = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Two = styled.div`
  flex: 1;
  padding: 20px;
`;
const Three = styled.div`
  flex: 1;
  padding: 20px;
`;
const Four = styled.div`
  flex: 1;
  padding: 20px;
`;
const Five = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Payment = styled.img`
    width: 50%;
`;

export default Footer;