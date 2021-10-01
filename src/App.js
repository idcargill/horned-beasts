import React from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import InputForm from "./components/InputForm.js";
import Footer from "./components/Footer.js";
import SelectedBeast from "./components/SelectedBeast.js";
// CSS
import "./App.css";
import Container from "react-bootstrap/Container";
// DATA
import dataJson from "./data/data.json";
// import { Form } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      data: dataJson,
      beastTitle: "none",
      selectedAnimal: "",
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

  searchUpdate = (e) => {
    e.preventDefault();
    // id='text or Horns'
    let regex = "";
    let searchWord = "";
    // Enter Text Search
    if (e.target.id === "text") {
      // restet horns field
      let h = document.querySelector("#horns");
      h.value = "1";
      searchWord = e.target.value;
      regex = new RegExp(searchWord, "gi");
      let textResults = dataJson.filter(
        (words) => regex.test(words.description) || regex.test(words.keyword)
      );
      this.setState({ data: textResults });

      // Enter Horns Search
    } else if (e.target.id === "horns") {
      // Reset Text field
      let t = document.querySelector("#text");
      t.value = "";
      let hornCount = parseInt(e.target.value);
      let hornResults = dataJson.filter((beast) => beast.horns === hornCount);
      this.setState({ data: hornResults });
    }
  };

  render() {
    return (
      <>
        <Container fluid>
          <Header header='Welcome to the Gallery of Horns' />
          <InputForm searchUpdate={this.searchUpdate} />
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
