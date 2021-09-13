import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <section className="col">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            className="form-control"
            data-testid="title-input"
            type="text"
            id="title-input"
            name="title"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
