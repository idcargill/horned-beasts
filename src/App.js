import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import InputForm from './components/InputForm.js';
import Footer from './components/Footer.js';
import SelectedBeast from './components/SelectedBeast.js';
// CSS
import './App.css';
import Container from 'react-bootstrap/Container';
// DATA
import dataJson from './data/data.json';
// import { Form } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      data: dataJson,
      beastTitle: 'none',
      selectedAnimal: '',
      sortBy: 'text'
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

  searchForm = (e) => {
    // Search By Horns
    if (parseInt(e.target.value)) {
      this.setState({sortBy: 'horns'})
      // Sort Horns
      let num = e.target.value;
      let results = dataJson.filter((beast) => beast.horns >= num);
      this.setState({data:results})
    } else {
      this.setState({sortBy: 'text'})
      console.log(this.state.sortBy)
    }
  }

  searchUpdate = (e) => {
      let results = dataJson;
      let searchWord = e.target.value;
      let regex = new RegExp(searchWord, 'gi');
      results = dataJson.filter(
        (words) => regex.test(words.description) || regex.test(words.keyword)
        );
        if (results.length < 1) {
          results = dataJson;
        }
        this.setState({ data: results });

    }


  render() {
    return (
      <>
        <Container fluid>
          <Header header='Welcome to the Gallery of Horns' />
          <InputForm searchUpdate={this.searchUpdate} searchByText={this.state.searchByText}/>
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
