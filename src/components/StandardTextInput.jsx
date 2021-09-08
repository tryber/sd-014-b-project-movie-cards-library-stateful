import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class StandardTextInput extends Component {
  render() {
    const { propsInfoArray } = this.props;
    const array = propsInfoArray;
    return (
      <label htmlFor={ array[1] } data-testid={ `${array[2]}-label` }>
        {array[0]}
        <input
          id={ array[1] }
          data-testid={ array[2] }
          value={ array[3] }
          onChange={ array[4] }
        />
      </label>
    );
  }
}

StandardTextInput.propTypes = {
  propsInfoArray: PropTypes.array,
}.isRequired;

export default StandardTextInput;
