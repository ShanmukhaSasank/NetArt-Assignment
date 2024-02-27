
import styled from "@emotion/styled";
import { Box,Toolbar } from "@mui/material";
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';


const Base = styled(Box)`
 text-align:center;
`;

const Redbar = styled(Toolbar)`
    background-color:#EC3237;
    height:60px;
    align-items:center;
    color:white;
`

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
                CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL
            </Base>
            <BaseImage>
                <Redbar style={{paddingLeft:170}}>
                    <CallRoundedIcon/>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    Toll free 1800 200 1234
                    <span style={{paddingLeft:250}}>
                        <FacebookRoundedIcon/>
                    </span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <a href="www.facebook.com/cripumps" style={{color:"white"}}>www.facebook.com/cripumps</a> 
                    <span style={{paddingLeft:250}}>
                        <LanguageRoundedIcon/>  
                    </span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <a href="www.crigroups.com" style={{color:"white"}}>www.crigroups.com</a> 
                </Redbar>
            </BaseImage>
        </div>
    )
}

export default Footer;