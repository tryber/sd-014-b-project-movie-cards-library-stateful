import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class StandardSelect extends Component {
  render() {
    const { propsInfoArray } = this.props;
    const array = propsInfoArray;

    return (
      <label htmlFor={ array[1] } data-testid={ `${array[2]}-label` }>
        {array[0]}
        <select
          id={ array[1] }
          data-testid={ array[2] }
          value={ array[4] }
          onChange={ array[5] }
        >
          { array[3].map((option) => (
            <option
              key={ Object.keys(option)[0] }
              value={ Object.values(option)[0] }
              data-testid={ `${array[1]}-option` }
            >
              { Object.keys(option)[0] }
            </option>)) }
        </select>
      </label>
    );
  }
}

StandardSelect.propTypes = {
  propsInfoArray: PropTypes.array,
}.isRequired;

export default StandardSelect;
