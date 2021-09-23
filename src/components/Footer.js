import React from 'react';
import Alert from 'react-bootstrap/Alert';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      variant: 'primary',
    };
  }

  HandleClick = () => {
    if (!this.state.text) {
      this.setState({
        text: 'Seriously, this site does nothing.  Why are you even reading this?',
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
          className='footer'
          variant={this.state.variant}
          onClick={this.HandleClick}>
          <p>Created by Ian Cargill for like...no reason.</p>
          <p>{this.state.text}</p>
        </Alert>
      </>
    );
  }
}

export default Footer;
