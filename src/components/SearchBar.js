import React from 'react';
import { FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <InputGroup size='sm'>
          <InputGroup.Text >
            <FormControl 
              onChange={this.props.searchUpdate}
              placeholder='search the beasts'
            />
          </InputGroup.Text>
        </InputGroup>
      </>
    );
  }
}

export default SearchBar;
