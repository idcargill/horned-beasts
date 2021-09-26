import React from 'react';
import { FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <InputGroup size='sm' id='form'>
          <InputGroup.Text id='search' className='m-3'>
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
