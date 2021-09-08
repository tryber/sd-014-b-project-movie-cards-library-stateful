import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
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
    this.information = this.information.bind(this);
  }

  information = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" name="subtitle" onChange={ this.information } value={ subtitle } data-testid="subtitle-input"/>
        </label>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input type="text" name="title" onChange={ this.information } value={ title } data-testid="title-input"/>
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input type="text" name="imagePath" onChange={ this.information } value={ imagePath } data-testid="image-input" />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
          <input name="storyline" type="text" onChange={ this.information } value={ storyline } data-testid="storyline-input"/>
        </label>
        <labe htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input name="rating" type="number" onChange={ this.information } value={ rating } data-testid="rating-input" />
        </labe>
        <label htmlFor="genre" data-testid="genre-input-label">
          gênero
          <input name="genre" type="text" onChange={ this.information } value={ genre } data-testid="genre-input"/>
        </label>
      </form>
    );
  }
}

export default AddMovie;
