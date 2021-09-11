import React from 'react';
import PropTypes from 'prop-types';

class ButtonClick extends React.Component {
  render() {
    const { click } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ click }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonClick.propTypes = {
  click: PropTypes.func.isRequired,
};

export default ButtonClick;
