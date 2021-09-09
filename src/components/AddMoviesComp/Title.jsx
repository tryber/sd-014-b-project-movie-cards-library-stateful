import PropTypes from 'prop-types';
import React from 'react';

class Title extends React.Component {
  render() {
    const { title, inputChange } = this.props;
    return (
      <label htmlFor="titleText" data-testid="title-input-label">
        Título
        <input
          name="title"
          data-testid="title-input"
          onChange={ inputChange }
          value={ title }
          type="text"
          id="titleText"
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string,
  inputChange: PropTypes.func,
}.isRequired;

export default Title;
