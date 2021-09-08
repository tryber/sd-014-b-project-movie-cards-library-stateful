import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class StandardInput extends Component {
  render() {
    const { propsInfoArray } = this.props;
    const array = propsInfoArray;

    return (
      <label htmlFor={ array[1] } data-testid={ `${array[2]}-label` }>
        {array[0]}
        <input
          id={ array[1] }
          data-testid={ array[2] }
          value={ array[4] }
          onChange={ array[5] }
          type={ array[3] }
        />
      </label>
    );
  }
}

StandardInput.propTypes = {
  propsInfoArray: PropTypes.array,
}.isRequired;

export default StandardInput;
