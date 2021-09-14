import React from 'react';
import PropTypes from 'prop-types';

class SelectItem extends React.Component {
  render() {
    const { name, value, options, onChange, children } = this.props;
    const keys = Object.keys(options);
    const values = Object.values(options);
    return (
      <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
        { children }
        <select
          name={ name }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onChange }
        >
          { keys.map((key, i) => (
            <option
              data-testid={ `${name}-option` }
              value={ key }
              key={ key }
            >
              { values[i] }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

SelectItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
export default SelectItem;
