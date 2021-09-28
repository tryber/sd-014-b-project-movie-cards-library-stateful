import React from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends React.Component {
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

ButtonAdd.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ButtonAdd;
