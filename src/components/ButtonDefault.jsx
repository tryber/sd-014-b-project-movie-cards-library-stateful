import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonDefault
  extends Component {
  render() {
    const { inputId, onClick, description } = this.props;
    return (
      <button
        type="submit"
        data-testid={ inputId }
        onClick={ onClick }
      >
        { description }
      </button>
    );
  }
}

ButtonDefault.propTypes = {
  inputId: PropTypes.string,
  handleSubmit: PropTypes.func,
  description: PropTypes.string,
}.isRequired;

export default ButtonDefault;
