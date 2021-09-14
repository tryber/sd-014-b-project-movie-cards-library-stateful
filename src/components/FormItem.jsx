import React from 'react';
import PropTypes from 'prop-types';

class FormItem extends React.Component {
  render() {
    const { Tag, type, children, name, onChange, value } = this.props;
    return (
      <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
        { children }
        <Tag
          name={ name }
          type={ type }
          data-testid={ `${name}-input` }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FormItem.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  Tag: PropTypes.string,
};

FormItem.defaultProps = {
  type: 'text',
  Tag: 'input',
};

export default FormItem;
