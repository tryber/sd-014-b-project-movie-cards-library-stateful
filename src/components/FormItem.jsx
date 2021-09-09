import React from 'react';
import PropTypes from 'prop-types';

class FormItem extends React.Component {
  render() {
    const { children, name, onChange, value } = this.props;
    return (
      <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
        { children }
        <input
          name={ name }
          type="text"
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FormItem.propTypes = {
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormItem;
