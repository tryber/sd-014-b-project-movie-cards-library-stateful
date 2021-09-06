import React from 'react';

export default class AddMovie extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label ata-testid="title-input-label">
          Título
          <input data-testid="title-input" type="text"
          value={ title } onChange={ () => {} }/>
        </label>
        <label data-testid="subtitle-input-label" htmlFor="">
          Subtítulo
          <input type="text" name="" data-testid="subtitle-input"
            value={ subtitle } onChange={ () => {} }/>
        </label>
        <label data-testid="subtitle-input-label" htmlFor="">
          Imagem
          <input type="text" name="" data-testid="image-input-label"
            value={ imagePath } onChange={ () => {} }/>
        </label>
        <label htmlFor="" data-testid="storyline-input-label">
          Sinopse
          <textarea name="" id="" cols="30" rows="10"
            value={ storyline } data-testid="storyline-input" onChange={ () => {} } />
        </label>
        <label htmlFor="" data-testid="rating-input-label">
          Avaliação
          <input type="number" name="" data-testid="rating-input"
            value={ rating } onChange={ () => {} } />
        </label>
        <label htmlFor="" data-testid="genre-input-label">
          Gênero
          <select value={ genre } onChange={ () => {} } data-testid="genre-input">
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button data-testid="send-button" onClick={ () => {} }>Adicionar filme</button>
      </form>
    )
  }
}
