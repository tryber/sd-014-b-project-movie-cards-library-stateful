import React from 'react';

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

export default SelectItem;
