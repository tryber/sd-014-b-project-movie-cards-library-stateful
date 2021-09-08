import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form className="form-container">
          <label className="form-label" htmlFor="add-title">
            Título
            <input className="form-input" id="add-title" type="text" />
          </label>
          <label className="form-label" htmlFor="add-subtitle">
            Subtítulo
            <input className="form-input" id="add-subtitle" type="text" />
          </label>
          <label className="form-label" htmlFor="add-image">
            Imagem
            <input className="form-input" id="add-image" type="text" />
          </label>
          <label className="form-label" htmlFor="add-sinopse">
            Sinopse
            <input className="form-input" id="add-sinopse" type="text" />
          </label>
          <label className="form-label" htmlFor="add-subtitle">
            Avaliação
            <input className="form-input" id="add-subtitle" type="text" />
          </label>
          <label className="form-label" htmlFor="add-subtitle">
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
