import React from 'react';
import PropTypes from 'prop-types';

class ButtonSearch extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonSearch.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonSearch;
