import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick } = this.props;
    // const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
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

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
//   state: PropTypes.shape({
//     subtitle: PropTypes.string,
//     title: PropTypes.string,
//     imagePath: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.number,
//     genre: PropTypes.string,
//   }).isRequired,
};

export default Button;
