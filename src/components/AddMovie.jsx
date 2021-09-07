import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Lint resolvido após leitura de documentação no link a seguir:
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#accessibility_concerns

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick({ target, keyCode }) {
    const keyEnter = 13;
    if (keyCode === keyEnter) console.log(target);
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div role="button" tabIndex={ 0 } onClick={ onClick } onKeyUp={ this.handleClick }>
        <button type="button">Um Botão</button>
        { subtitle }
        { title }
        { imagePath }
        { storyline }
        { rating }
        { genre }
      </div>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
