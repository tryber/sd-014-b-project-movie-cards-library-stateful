import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <button
        name="button"
        type="button"
        data-testid="send-button"
        onClick={ onChange }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Button;
