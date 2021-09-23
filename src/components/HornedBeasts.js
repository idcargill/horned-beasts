import React from 'react';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0,
    };
  }

  HandleClick = () => {
    this.setState({ favorite: this.state.favorite + 1 });
    console.log(this.state.favorite);
  };

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.image}
          alt='Beastly Pic'
          title={this.props.title}
          onClick={this.HandleClick}
        />
        <p>Like-O-meter &#10084; {this.state.favorite}</p>
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeasts;

/*
&#10084;
&#x2764;
*/
