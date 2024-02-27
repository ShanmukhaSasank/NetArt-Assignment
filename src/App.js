// App.js
import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Information from './components/information/information';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header/>
      <Box sx={{ maxWidth: '100%', overflowX: 'hidden' }}>
        <Navbar></Navbar>
      </Box>
      <Information/>
      <Footer></Footer>
    </>
  );
}

export default App;
