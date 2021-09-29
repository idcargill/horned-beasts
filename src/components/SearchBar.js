import React from 'react';
import { FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <InputGroup size='sm' id='form'>
          <InputGroup.Text id='search'>
            <FormControl 
              // onChange={this.props.searchUpdate}
              onChange={this.props.searchForm}
              placeholder='search the beasts'
            />
          </InputGroup.Text>
        </InputGroup>
      </>
    );
  }
}

export default SearchBar;
