import React from 'react';
import Alert from 'react-bootstrap/Alert';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      variant: 'dark',
    };
  }

  HandleClick = () => {
    if (!this.state.text) {
      this.setState({
        text: "Welcome to the Horned Bests!.Click on a beast to vote for your favorite. Click away! You'll win nothing!",
        variant: 'success',
      });
    } else {
      this.setState({ text: '', variant: 'primary' });
    }
  };

  render() {
    return (
      <>
        <Alert
          variant={this.state.variant}
          className='header'
          onClick={this.HandleClick}>
          <Alert.Heading>{this.props.header}</Alert.Heading>
          <p>{this.state.text}</p>

        </Alert>
      </>
    );
  }
}

export default Header;
