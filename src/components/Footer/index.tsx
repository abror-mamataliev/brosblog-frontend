import {
  Container,
  Navbar
} from "react-bootstrap";

import "./index.scss"
import {
  logoColor,
  logoFont,
  logoGenerator,
  logoUrl
} from "service";

const Footer = () => {
  const logoBrand: string = "A Bro"
  const logoFile: string = "abro.png"
  const logo: string = logoGenerator(logoUrl, logoFont, logoBrand, logoFile, logoColor);

  return (
    <div className="fixed-bottom">
      <Navbar className="bc-footer py-2">
        <Container fluid className="vertical-align">
          <a href="https://www.instagram.com/abror_mamataliev/" target={"_blank"}>
            <img src={logo} alt={logoBrand} height={30} />
          </a>
          <a href="https://www.instagram.com/abror_mamataliev/" className="developers" target={"_blank"}>
            Powered by A Bro
          </a>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
