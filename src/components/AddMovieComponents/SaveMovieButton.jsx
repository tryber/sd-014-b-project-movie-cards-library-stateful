import React from 'react';

class SaveMovieButton extends React.Component {
  render() {
    const { onClick } = this.props; // A propriedade onClick do botão invoca uma função definida por você, em <AddMovie />
    return (
      <button
        data-testid="send-button"
        type="submit"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

export default SaveMovieButton;
