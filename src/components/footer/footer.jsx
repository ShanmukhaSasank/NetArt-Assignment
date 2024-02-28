import styled from "@emotion/styled";
import { Box, Toolbar } from "@mui/material";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import Quicklinks from "../quicklinks/quicklinks";

const Base = styled(Box)`
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: Georgia, serif;
`;

const Redbar = styled(Toolbar)`
  background-color: #EC3237;
  height: auto; /* Adjusted height */
  align-items: center;
  color: white;
  font-family: Georgia, serif;
  display: flex;
  flex-wrap: wrap; /* Allow content to wrap */
  justify-content: center; /* Center content */
`;

const ContactInfo = styled(Box)`
  display: flex;
  align-items: center;
  margin-left:15rem;
  margin-right:15rem
`;

const tollFreeNumber = "1-800-200-1234";

const generateSearchUrl = (number) => {
  const searchQuery = encodeURIComponent(number);
  return `https://www.google.com/search?q=${searchQuery}`;
};

const handleClick = () => {
  const searchUrl = generateSearchUrl(tollFreeNumber);
  window.open(searchUrl, '_blank'); // Open search URL in a new tab
};

const Footer = () => {
  return (
    <div>
      <Base>
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <Quicklinks />
      </Base>
      <Redbar>
          <CallRoundedIcon />
          <span>&nbsp;Toll free&nbsp;</span>
          <p onClick={handleClick} style={{ cursor: 'pointer', fontWeight: 600}}>
            {tollFreeNumber}
          </p>
        <ContactInfo>
          <FacebookRoundedIcon />
          <a href="https://www.facebook.com/groups/164434714165016" style={{ color: "white", marginLeft: '0.5rem' }} target="_blank" rel="noopener noreferrer">www.facebook.com/cripumps</a>
        </ContactInfo>
        <LanguageRoundedIcon />
        <p>
            <a href="https://www.crifluidsystems.com/50/" style={{ color: "white", marginLeft: '0.5rem' }} target="_blank" rel="noopener noreferrer">www.crigroups.com</a>
        </p>
      </Redbar>
    </div>
  )
}

export default Footer;
