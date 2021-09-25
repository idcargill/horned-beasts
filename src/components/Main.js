import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import data from '../data/data.json';
// CSS
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Main extends React.Component {
  render() {
    const CardsArr = () =>
      data.map((i, idx) => (
        <HornedBeasts
          key={idx}
          title={i.title}
          description={i.description}
          image={i.image_url}
          alt={i.keyword}
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
