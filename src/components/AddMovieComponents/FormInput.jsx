import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  render() {
    const { labelId, myName, myValue, callback, dataId, text, myType } = this.props;
    return (
      <label htmlFor={ dataId } data-testid={ labelId }>
        {text}
        <input
          name={ myName }
          type={ myType }
          value={ myValue }
          data-testid={ dataId }
          onChange={ callback }
        />
      </label>
    );
  }
}

FormInput.propTypes = {
  callback: PropTypes.func.isRequired,
  labelId: PropTypes.string.isRequired,
  myName: PropTypes.string.isRequired,
  myValue: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  myType: PropTypes.string.isRequired,
};

export default FormInput;
