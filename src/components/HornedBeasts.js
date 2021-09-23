import React from 'react';
import Card from 'react-bootstrap/Card';

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
          className='mb-2'
          style={{ width: '20em', padding: '20px', margin: '20px' }}>
          <Card.Img
            alt={this.props.alt}
            src={this.props.image}
            onClick={this.HandleClick}></Card.Img>
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
