import { Box } from "@mui/material";
import motor from './motor.png'
import styled from "@emotion/styled";

const Motor = styled(Box)`
  text-align: center;
  margin-top: 1rem;
`;

const Valves = styled(Box)`
  text-align: center;
  font-size: small;
  font-family: Georgia, serif;
  margin-top: 1rem;
`;

const Line = styled(Box)`
  text-align: center;
`;

const lineStyle = {
  width: '93%',
  margin: '20px auto',
  border: '1px solid #E0413E'
};

const Install = styled(Box)`
  font-family: Georgia, serif;
  font-size: small;
  margin-left: 2rem;
  font-weight: 600;
`;

const Information = () => {
  return (
    <div>
      <Install>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
      </Install>
      <Motor>
        <img src={motor} alt="motor" style={{ width: '53vw',height:'25vw', maxHeight: '25vw', maxWidth: '53vw' }} />
      </Motor>
      <Valves>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
      </Valves>
      <Line>
        <hr style={lineStyle} />
      </Line>
    </div>
  );
};

export default Information;
