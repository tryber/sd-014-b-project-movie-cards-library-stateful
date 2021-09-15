import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { titleValue, handleChange } = this.props;
    return (
      <label htmlFor="titleText" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          id="titleText"
          data-testid="title-input"
          onChange={ handleChange }
          value={ titleValue }
        />
      </label>
    );
  }
}

Title.propTypes = {
  titleValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Title;
