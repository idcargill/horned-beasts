import React from 'react';
import HornedBeasts from './HornedBeasts.js';
// CSS
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import CardGroup from 'react-bootstrap/CardGroup';

class Main extends React.Component {
  render() {
    const CardsArr = () =>
      this.props.data.map((i, idx) => (
        <HornedBeasts
          key={idx}
          title={i.title}
          description={i.description}
          image={i.image_url}
          alt={i.keyword}
          toggleModal={this.props.toggleModal}
          updateLikes={this.props.updateLikes}
        />
      ));

    return (
      <>
        <Container>
          <Row xs={1} md={3} lg={4}>
            <CardsArr />
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
