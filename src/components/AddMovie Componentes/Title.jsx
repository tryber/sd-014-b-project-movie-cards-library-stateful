import React from 'react';
import PropType from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="MovieTitle" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Title.PropType = {
  value: PropType.string.isRequired,
  handleChange: PropType.func.isRequired,
};

export default Title;
