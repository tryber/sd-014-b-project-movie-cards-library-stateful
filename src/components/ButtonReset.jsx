import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonReset extends Component {
  render() {
    const { handleClick, label } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ handleClick }
      >
        { label }
      </button>
    );
  }
}

ButtonReset.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default ButtonReset;
