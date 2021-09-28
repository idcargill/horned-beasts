import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {

  addLike = () => {
    this.props.beastLikes(this.props.title)
  };

  render() {
    let name = this.props.title;
    // console.log(name);
    

    let likes = 0;
    (this.props.totalLikes[name] == undefined) ? likes = 0 : likes= this.props.totalLikes[name]; 

    return (
      <>
        <Card text='white' className='m-1 p-3' style={{ width: '200px' }}>
          <Card.Img
            src={this.props.image}
            alt={this.props.alt}
            onClick={() => this.props.toggleModal(this.props)}
            className='m-1'></Card.Img>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Footer>
            <p className='text-center'>Like-O-meter</p>
            <p className='text-center'>
              <span className='m-1 like-meter' onClick={this.addLike}>
                &#10084;
                <span>{this.props.totalLikes[name]}</span>
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
