import React, {PropTypes, Component} from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

Login.defaultProps = {
  text: 'My brand new component!'
};

Login.propTypes = {
  text: PropTypes.string
};
