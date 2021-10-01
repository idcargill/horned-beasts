import React from "react";
import SearchBar from "./SearchBar.js";
import Form from "react-bootstrap/Form";

class InputForm extends React.Component {
  render() {
    return (
      <div className='input-form container'>
        <Form
          size='sm'
          className='m-3 p-3'
          onSubmit={(e) => e.preventDefault()}
        >
          <h2>Beast Filter</h2>
          <Form.Group controlId='text'>
            <SearchBar searchUpdate={this.props.searchUpdate} />
          </Form.Group>
          <Form.Group controlId='horns'>
            <Form.Select onChange={this.props.searchUpdate}>
              <option value='1'>Sort by # of Horns</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three?</option>
              <option value='100'>Like...way more</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default InputForm;
