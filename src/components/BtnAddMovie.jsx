import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnAddMovie extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="send-button"
          onClick={ handleClick }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

BtnAddMovie.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default BtnAddMovie;
