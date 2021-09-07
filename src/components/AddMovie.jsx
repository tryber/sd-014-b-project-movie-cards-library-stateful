import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.initialState = this.state;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checkbox : target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState(this.initialState);
    console.log(this.state);
  }

  addSubmit = () => (
    <button
      data-testid="send-button"
      type="submit"
      onClick={ this.handleSubmit }
    >
      Adicionar filme
    </button>
  );

  addTitle = () => {
    const { title } = this.state;
    return (
      <label
        htmlFor="title"
        data-testid="title-input-label"
      >
        Título
        <input
          data-testid="title-input"
          type="text"
          id="title"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  addSubtitle = () => {
    const { subtitle } = this.state;
    return (
      <label
        htmlFor="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          id="subtitle"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  addImagem = () => {
    const { imagePath } = this.state;
    return (
      <label
        htmlFor="image"
        data-testid="image-input-label"
      >
        Imagem
        <input
          data-testid="image-input"
          type="text"
          id="image"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  addGenre = () => {
    const { genre } = this.state;
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          data-testid="genre-input"
          id="genre"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { storyline } = this.state;
    const { rating } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          { this.addTitle() }
          { this.addSubtitle() }
          { this.addImagem() }

          <label
            htmlFor="storyline"
            data-testid="storyline-input-label"
          >
            Sinopse
            <textarea
              data-testid="storyline-input"
              type="text"
              id="storyline"
              name="storyline"
              value={ storyline }
              onChange={ this.handleChange }
            />
          </label>

          <label
            htmlFor="rating"
            data-testid="rating-input-label"
          >
            Avaliação
            <input
              data-testid="rating-input"
              type="number"
              id="rating"
              name="rating"
              value={ rating }
              onChange={ this.handleChange }
            />
          </label>

          { this.addGenre() }
          { this.addSubmit() }
        </form>
      </section>
    );
  }
}

export default AddMovie;
