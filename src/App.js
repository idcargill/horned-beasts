import React from 'react';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import SelectedBeast from './components/SelectedBeast.js';
// CSS
import './App.css';
import Container from 'react-bootstrap/Container';
// DATA
import dataJson from './data/data.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      data: dataJson,
      beastTitle: 'none',
      selectedAnimal: '',
    };
  }

  toggleModal = (beastTitle) => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });

    this.state.data.forEach((beast) => {
      if (beast.title === beastTitle) {
        this.setState({ selectedAnimal: beast });
        console.log(this.state);
      }
    });
  };

  searchUpdate = (input) => {
    let results = dataJson;
    let searchWord = input.target.value;
    let regex = new RegExp(searchWord, 'gi');
    results = dataJson.filter(
      (words) => regex.test(words.description) || regex.test(words.keyword)
    );
    console.log(regex, results);
    if (results.length < 1) {
      results = dataJson;
    }
    this.setState({ data: results });
  };

  render() {
    return (
      <>
        <Container fluid>
          <Header header='Horned Beasts' />
          <SearchBar searchUpdate={this.searchUpdate} />
          <SelectedBeast
            show={this.state.show}
            toggleModal={this.toggleModal}
            data={this.state.data}
            selectedAnimal={this.state.selectedAnimal}
          />
          <Main data={this.state.data} toggleModal={this.toggleModal} />
          <Footer />
        </Container>
      </>
    );
  }
}

export default App;
