import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        datatest-id="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

InputButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
