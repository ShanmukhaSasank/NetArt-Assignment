import { styled, Box } from "@mui/material";
import logo from './logo.png';

const Image = styled(Box)`
    text-align: center;
    height: 20%;
    @media (max-width: 768px) {
        padding: 0 10px;
      }
`;

const Header = () => {
    return (
        <div>
            <Image>
                <img src={logo} alt="logo" style={{height:150}}/>
            </Image>
        </div>
    );
};

export default Header;
