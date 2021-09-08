import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.setState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form" className="form-container">
          <label data-testid="title-input-label" className="formLabel" htmlFor="addTitle">
            Título
            <input
              data-testid="title-input"
              className="form-input"
              id="addTitle"
              type="text"
            />
          </label>
          <label className="formLabel" htmlFor="add-subtitle">
            Subtítulo
            <input className="form-input" id="add-subtitle" type="text" />
          </label>
          <label className="formLabel" htmlFor="add-image">
            Imagem
            <input className="form-input" id="add-image" type="text" />
          </label>
          <label className="formLabel" htmlFor="add-sinopse">
            Sinopse
            <input className="form-input" id="add-sinopse" type="text" />
          </label>
          <label className="formLabel" htmlFor="add-subtitle">
            Avaliação
            <input className="form-input" id="add-subtitle" type="text" />
          </label>
          <label className="formLabel" htmlFor="add-subtitle">
            Gênero
            <input className="form-input" id="add-subtitle" type="text" />
          </label>
          <button className="form-button" type="submit">Adicionar</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
