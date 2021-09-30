import React from 'react';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';

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
  
  GetHearts = () => {
    let beastName = this.props.title;
    let hearts = this.props.totalLikes[beastName];

    if (hearts === undefined) {
      hearts = 0;
    }
    return hearts;
  }

  render() {
    let name = this.props.title;

    return (
      <>
        <Card text='white' className='m-1 p-3' style={{ width: '200px' }}>
          <Card.Img
            src={this.props.image}
            alt={this.props.alt}
            onClick={() => {this.props.toggleModal(name)}}
            className='m-1'></Card.Img>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Footer >
            <p className='text-center'>Like-O-meter</p>
            <p className='text-center'>
              <span 
              className='m-1 like-meter' 
              // onClick={this.HandleClick}
              onClick={() =>this.props.updateLikes(name)}>
                &#10084;
                <span>{this.GetHearts()}</span>
              </span>
            </p>
          </Card.Footer>
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
