import { styled, Box, Toolbar } from "@mui/material";
import logo from './logo.png';

const Head = styled(Toolbar)`
  position: sticky;
  top: 0;
  background-color: #EC3237;
  display: flex;
  justify-content: center; /* Center the content horizontally */
`;

const Image = styled(Box)`
  align-self: flex-start; /* Align the content to the top */
`;

const LogoImage = styled('img')`
  height: 100px; /* Set the height of the image */
`;

const Header = () => {
  return (
    <Head>
      <Image>
        <LogoImage src={logo} alt="logo" />
      </Image>
    </Head>
  );
};

export default Header;
