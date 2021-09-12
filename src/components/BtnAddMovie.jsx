import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnAddMovie extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

BtnAddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BtnAddMovie;
