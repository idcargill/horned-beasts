import React from 'react';
import Modal from 'react-bootstrap/Modal';
import HornedBeasts from './HornedBeasts';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {


  render() {
    // console.log('Selected Beast: ', this.props)
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
                image={this.props.selectedAnimal.image}
                alt={this.props.selectedAnimal.keyword}
                toggleModal={this.props.toggleModal}
                totalLikes={this.props.totalLikes}

              />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.toggleModal}>Close</Button>
            </Modal.Footer>
          </Modal>

          {/* <Modal
          show={this.props.show}
          className = 'modal-window'
          size='md'
          aria-labelledby='contained-modal-title-vcenter'
            centered>
              <Modal.Body>
                <img src={this.props.selectedAnimal.image} />
                <p>{this.props.selectedAnimal.title}</p>
              </Modal.Body>
              <Modal.Footer>
              <Button onClick={this.props.toggleModal}>Close</Button>
            </Modal.Footer>
          </Modal> */}

        </>
      );
    } else {
      return null;
    }
  }
}
export default SelectedBeast;
