import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="Título"
        data-testid="title-input-label"
      >
        Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
