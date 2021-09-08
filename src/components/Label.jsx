import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, type, datatestidInput } = this.props;
    return <input data-testid={ datatestidInput } id={ id } type={ type } />;
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  datatestidInput: PropTypes.string.isRequired,
};

export default Input;
