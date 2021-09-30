import React from 'react';
import Modal from 'react-bootstrap/Modal';
import HornedBeasts from './HornedBeasts';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
 
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
            <Modal.Body>
              <HornedBeasts
                key={'1'}
                title={this.props.selectedAnimal.title}
                description={this.props.selectedAnimal.description}
                image={this.props.selectedAnimal.image_url}
                alt={this.props.selectedAnimal.keyword}
                toggleModal={this.props.toggleModal}
                updateLikes={this.props.updateLikes}
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
