
import styled from "@emotion/styled";
import { Box,Toolbar } from "@mui/material";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import Quicklinks from "../quicklinks/quicklinks";


const Base = styled(Box)`
 text-align:center;
 padding-left:1rem;
 padding-right:1rem;
 font-family: Georgia, serif;
`;

const Redbar = styled(Toolbar)`
    background-color:#EC3237;
    height:60px;
    align-items:center;
    color:white;
 font-family: Georgia, serif;

`
const tollFreeNumber = "1-800-200-1234";


    const generateSearchUrl = (number) => {

        const searchQuery = encodeURIComponent(number);
        return  `https://www.google.com/search?q=${searchQuery}`;
      
    };
    const handleClick = () => {
        const searchUrl = generateSearchUrl(tollFreeNumber);
        window.open(searchUrl, '_blank'); // Open search URL in a new tab
      };

const BaseImage = styled(Box)`
padding-left:6px;
padding-right:5px;
padding-top:25px;
`



const Footer = () =>{
    return(
        <div>
            <Base>
                <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <Quicklinks/>
            </Base>
            <BaseImage>
                <Redbar style={{paddingLeft:170}}>
                    <CallRoundedIcon/>
                        &nbsp;      
                        &nbsp;      
                    Toll free &nbsp;
                    <p onClick={handleClick} style={{ cursor: 'pointer', fontWeight:600 }}>
                        {tollFreeNumber}
                    </p>
                    <span style={{paddingLeft:250}}>
                        <FacebookRoundedIcon/>
                    </span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <a href="https://www.facebook.com/groups/164434714165016" style={{color:"white"}} target="_blank" rel="noopener noreferrer">www.facebook.com/cripumps</a>
                    <span style={{paddingLeft:250}}>
                        <LanguageRoundedIcon/>  
                    </span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <a href="https://www.crifluidsystems.com/50/" style={{color:"white"}} target="_blank" rel="noopener noreferrer">www.crigroups.com</a> 
                </Redbar>
            </BaseImage>
        </div>
    )
}

export default Footer;