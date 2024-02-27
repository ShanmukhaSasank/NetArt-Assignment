
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import footer from './footer.png'

const Base = styled(Box)`
 text-align:center;
 
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
                <img src={footer} alt="logo" style={{height:90, width:1510}}/>
            </BaseImage>
        </div>
    )
}

export default Footer;