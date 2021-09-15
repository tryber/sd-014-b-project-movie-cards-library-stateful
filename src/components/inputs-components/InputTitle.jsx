import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        <p>Título</p>
        <input
          name="title"
          type="text"
          id="title"
          value={ value }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTitle;
