import React from 'react';
import Modal from 'react-bootstrap/Modal';
import HornedBeasts from './HornedBeasts';
import Button from 'react-bootstrap/Button';

// data
// show
// beast.title

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      selectedAnimal: 'none',
    };
  }

  render() {
    if (this.props.show) {
      return (
        <>
          <Modal
            {...this.props}
            show={this.props.show}
            className='modal-window'
            size='md'
            aria-labelledby='contained-modal-title-vcenter'
            centered>
            {/* <Modal.Title>beast</Modal.Title> */}
            <Modal.Body>
              <HornedBeasts
                key={'1'}
                title={this.props.selectedAnimal.title}
                description={this.props.selectedAnimal.description}
                image={this.props.selectedAnimal.image_url}
                alt={this.props.selectedAnimal.keyword}
                toggleModal={this.props.toggleModal}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.toggleModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    } else {
      return null;
    }
  }
}
export default SelectedBeast;
