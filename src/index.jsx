import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, styled } from 'styled-components';
import Home from './pages/Home/home';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import About from './pages/About/about';
import Error from './pages/Error/error';
import Accommodation from './pages/Accommodation/accommodation';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

const StyledMain = styled.main`
  padding:30px;
  padding-bottom:200px;
  max-width:1240px;
  margin: auto;
`;

const StyledHTML = styled.div`
  position: relative;
  min-height: 100vh;
`;

const App = () => {
  return (
    <StyledHTML>
      <GlobalStyle />
      <Header/>
      <StyledMain>
        <Routes> 
          <Route path="/" element={<Home />} />   
          <Route path="/about" element={<About />} />   
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="*" element={<Error />} />   
        </Routes>
      </StyledMain>
      <Footer/>
    </StyledHTML>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
