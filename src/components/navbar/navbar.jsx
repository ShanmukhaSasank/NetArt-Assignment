import styled from "@emotion/styled";
import { Box } from "@mui/material";
import image from './image.png'
import photo from './photo.png'

const Center = styled(Box)`
  display: flex;
  margin-top: 0.5rem;
`;

const Navbar = () => {
  return (
    <div>
      <Center>
        <img src={image} alt="logo" style={{ width: '30vw' }}/>
        <Box>
          <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
          <ul>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <Box>
            <img src={photo} alt="logo" style={{ height: 450, width: '50vw' }}/>
          </Box>
          <Box>
            Government of India has awarded the <span style={{ fontWeight: 600 }}>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </Box>
        </Box>
      </Center>
    </div>
  );
}

export default Navbar;
