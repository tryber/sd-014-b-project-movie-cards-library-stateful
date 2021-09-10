import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        onClick={ onClick }
        data-testid="send-button"
        type="button"
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
