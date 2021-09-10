import React from 'react';
import PropTypes from 'prop-types';

class MovieTitle extends React.Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label htmlFor="titleInput" data-testid="titleInputLabel">
        Título
        <input
          type="text"
          name="title"
          data-testid="titleInput"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieTitle;
