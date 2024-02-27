
import { Box } from "@mui/material";
import motor from './motor.png'
import styled from "@emotion/styled";
import line from './line.png'


const Motor = styled(Box)`
    text-align:center;
    @media (max-width: 768px) {
        padding: 0 10px;
      }
`;

const Valves = styled(Box)`
    text-align:center;
    font-size:small;
    @media (max-width: 768px) {
        padding: 0 10px;
      }
`;

const Line = styled(Box)`
    text-align:center;
    @media (max-width: 768px) {
        padding: 0 10px;
      }
`

const Information = () =>{

    return(
        <div style={{fontWeight:600}}>
            <span style={{paddingLeft:20}}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</span>
            <br/>
            <Motor>
                <br>
                </br>
                <img src={motor} alt="logo" style={{height:350}}/>
            </Motor>
            <Valves>
                <br></br>
                Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
            </Valves>
            <Line>
                <img src={line} alt="logo" style={{height:10, width:1300}}/>
            </Line>
        </div>
    )
}

export default Information;