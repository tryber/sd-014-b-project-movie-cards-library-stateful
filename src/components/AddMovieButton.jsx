import React from 'react';
import PropTypes from 'prop-types';

class AddMovieButton extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={ onChange }
      >
        Adicionar filme
      </button>
    );
  }
}

AddMovieButton.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default AddMovieButton;
