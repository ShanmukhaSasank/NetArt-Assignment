import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Underline = styled(Box)`
    text-decoration: none;
`

const Quicklinks = () =>{
    return(
        <div>
            <Underline>
                <a href="https://www.crifluidsystems.com/50/application/chemical/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">CHEMICALS & PROCESS</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crigroups.com/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">POWER</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crigroups.com/pumps/waste-water-pumps-dl-sl-slc-series/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">WATER & WASTE WATER</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crifluidsystems.com/oil-and-gas/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">OIL & GAS</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crifluidsystems.com/50/application/pharma/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">PHARMA</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crifluidsystems.com/50/application/cement-sugar-textiles/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">SUGARS & DISTILLERIES</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crifluidsystems.com/50/application/paper-pulp/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">PAPER & PULP</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crigroups.com/about-us/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">MARINE & DEFENCE</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crifluidsystems.com/50/application/metal-mineral-mining/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">METAL & MINING</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crifluidsystems.com/50/application/food-and-beverage/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">FOOD & BEVERAGE</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crifluidsystems.com/50/application/petrochemical-refinery/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">PETROCHEMICAL & REFINERIES</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crigroups.com/solar-pump/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">SOLAR</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crigroups.com/commercial-building/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">BUILDING</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crigroups.com/hvac/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">HVAC</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crifluidsystems.com/50/application/fire-fighting/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">FIRE FIGHTING</a><span style={{color:"red"}}>|</span>
                <a href="https://www.crifluidsystems.com/50/application/agriculture-irrigation/" style={{color:"black", textDecoration:'none'}} target="_blank" rel="noopener noreferrer">AGRICULTURE & RESIDENTIAL</a>
            </Underline>
        </div>
    )
}

export default Quicklinks;