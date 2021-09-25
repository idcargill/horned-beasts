import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
// CSS
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// DATA
import dataJson from './data/data.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dataJson,
    };
  }
  render() {
    return (
      <>
        <Container fluid>
          <Header header='Horned Beasts' />
          <Main data={this.state.data} />
          <Footer />
        </Container>
      </>
    );
  }
}

export default App;
