import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ value }
          id="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Title;
