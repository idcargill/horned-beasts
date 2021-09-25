import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0,
    };
  }

  HandleClick = () => {
    this.setState({ favorite: this.state.favorite + 1 });
  };

  render() {
    return (
      <>
        <Card
          bg='danger'
          text='white'
          className='m-1'
          style={{ width: '200px' }}>
          <Card.Img
            src={this.props.image}
            alt={this.props.alt}
            onClick={this.HandleClick}
            className='m-1'></Card.Img>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Footer>Like-O-meter &#10084; {this.state.favorite}</Card.Footer>
        </Card>
      </>
    );
  }
}

export default HornedBeasts;

/*
&#10084;
&#x2764;
*/
