import React from 'react';
import InputDefault from './InputDefault';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  };

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputDefault
          text="Título"
          testIdLabel="title-input-label"
          testIdInput="title-input"
          id="search"
          name="title"
          value={ title }
          handleChange={ this.handleChange }
        />
        <InputDefault
          text="Subtítulo"
          testIdLabel="subtitle-input-label"
          testIdInput="subtitle-input"
          id="subtitle"
          name="subtitle"
          value={ subtitle }
          handleChange={ this.handleChange }
        />
        <InputDefault
          text="Imagem"
          testIdLabel="image-input-label"
          testIdInput="image-input"
          id="imagem"
          name="imagePath"
          value={ imagePath }
          handleChange={ this.handleChange }
        />
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            id="storyline"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
