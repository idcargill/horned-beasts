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
      this.props.data.map((data, idx) => (
        <HornedBeasts
          key={idx}
          title={data.title}
          description={data.description}
          image={data.image_url}
          alt={data.keyword}
          toggleModal={this.props.toggleModal}
          handleLikes={this.props.handleLikes}
          beastLikes={this.props.beastLikes}
          totalLikes={this.props.totalLikes}
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
