import React from 'react';
import PropTypes from 'prop-types';

class BtnSubmit extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <button
        data-testid="send-button"
        className="form-button"
        type="submit"
        onClick={ handleSubmit }
      >
        Adicionar filme
      </button>
    );
  }
}

BtnSubmit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default BtnSubmit;
