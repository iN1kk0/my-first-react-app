import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container className="mainContent" maxWidth="false"> 
        <Header/>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
