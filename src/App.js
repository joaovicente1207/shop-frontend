import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './components/pages/Home'
import Container from './components/layout/Container';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
            <Route exact path= "/" element={<Home/>}></Route>
        </Routes>
      </Container>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
