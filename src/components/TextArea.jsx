import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const {
      type,
      titleLabel,
      dataTestIdLabel,
      dataTestIdTextarea,
      name,
      value,
      handleChange,
    } = this.props;

    return (
      <label
        htmlFor={ dataTestIdTextarea }
        data-testid={ dataTestIdLabel }
      >
        { titleLabel }
        <textarea
          type={ type }
          id={ dataTestIdTextarea }
          data-testid={ dataTestIdTextarea }
          name={ name }
          cols="30"
          rows="10"
          onChange={ handleChange }
        >
          { value }
        </textarea>
      </label>
    );
  }
}

TextArea.propTypes = {
  type: PropTypes.string,
  titleLabel: PropTypes.string.isRequired,
  dataTestIdLabel: PropTypes.string.isRequired,
  dataTestIdTextarea: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
  type: 'text',
};

export default TextArea;
