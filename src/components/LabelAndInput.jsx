import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class LabelAndInput extends Component {
  render() {
    const { value, funcParameter, data: { labelDataTestid, labelHtmlFor, labelValue,
      inputName, dataTestid, inputType } } = this.props;
    return (
      <label
        data-testid={ labelDataTestid }
        htmlFor={ labelHtmlFor }
      >
        { labelValue }
        <Input
          name={ inputName }
          dataTestid={ dataTestid }
          type={ inputType }
          value={ value }
          funcChangingValue={ funcParameter }
        />
      </label>
    );
  }
}

// documentação do PropTypes https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html

LabelAndInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  funcParameter: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default LabelAndInput;
