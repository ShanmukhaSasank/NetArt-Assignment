import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Information from './components/information/information';
import Footer from './components/footer/footer';
import styled from '@emotion/styled';

const HeaderContainer = styled(Box)`
  background: linear-gradient(to bottom, #fffff5, #fff9bb); /* Gradient colors */
`;

function App() {
  return (
    <>
      <HeaderContainer>
        <Header/>
        <Box sx={{ maxWidth: '100%', overflowX: 'hidden' }}>
          <Navbar/>
        </Box>
        &nbsp;
        &nbsp;
        <Information/>
        <Footer/>
      </HeaderContainer>
    </>
  );
}

export default App;
