import { styled, Box, Toolbar } from "@mui/material";
import logo from './logo.png';

const Head = styled(Toolbar)`
  position: sticky;
  top: 0;
  background-color: #EC3237;
  display: flex;
  justify-content: center; /* Center the content horizontally */
  height: 7.0rem;
`;

const Image = styled(Box)`
  align-self: flex-start; /* Align the content to the top */
`;

const LogoImage = styled('img')`
  height: 7.5rem; /* Set the height of the image */
`;

const Header = () => {
  return (
    <Head>
      <Image>
        <a href="https://www.crifluidsystems.com/50/" target="_blank" rel="noopener noreferrer">
        <LogoImage src={logo} alt="logo" />
        </a>
      </Image>
    </Head>
  );
};

export default Header;
