import React from 'react';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import SelectedBeast from './components/SelectedBeast.js';
// CSS
import './App.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// DATA
import dataJson from './data/data.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      data: dataJson,
      beastTitle: 'none',
      selectedAnimal: {},
      totalLikes: {},
        };
  }

  toggleModal = (beastDetails) => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });

      this.setState({ selectedAnimal: beastDetails});
  };

  // Top Level Scope Object
  beastLikes = (name) => {
    (!this.state.totalLikes[name]) ? this.setState({totalLikes: {[name]: 1}}) : this.setState({totalLikes: {[name]:this.state.totalLikes[name] +1 }})  
    console.log(name);
    console.log(this.state.totalLikes)
  }


  searchUpdate = (input) => {
    let results = dataJson;
    let searchWord = input.target.value;
    let regex = new RegExp(searchWord, 'gi');
    results = dataJson.filter(
      (words) => regex.test(words.description) || regex.test(words.keyword)
    );
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
          <Main 
          data={this.state.data} 
          toggleModal={this.toggleModal} 
          beastLikes={this.beastLikes}
          totalLikes={this.state.totalLikes}
          />
          <SelectedBeast
            show={this.state.show}
            toggleModal={this.toggleModal}
            selectedAnimal={this.state.selectedAnimal}
            handleLikes={this.handleLikes}
            beastLikes={this.beastLikes}
            totalLikes={this.state.totalLikes}
          />
          <Footer />
        </Container>
      </>
    );
  }
}

export default App;
