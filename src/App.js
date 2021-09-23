import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <>
      <Container fluid='sm'>
        <Row fluid>
          <Header header='Horned Beasts' />
        </Row>
        <Row fluid>
          <Main />
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default App;
