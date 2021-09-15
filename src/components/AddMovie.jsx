import React from 'react';

class AddMovie extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     // subtitle: ' ',
  //     // title: ' ',
  //     // imagePath: ' ',
  //     // storyLine: ' ',
  //     // rating: 0,
  //     // genre: 'action',
  //   };
  // }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title">
          Título:
          <input type="text" name="title" id="title" value="" />
        </label>
        <label htmlFor="subtitle">
          Subtítulo:
          <input type="text" name="subtitle" id="subtitle" value="" />
        </label>
        <label htmlFor="imagePath">
          Capa:
          <input type="text" name="imagePath" id="imagePath" value="" />
        </label>
        <label htmlFor="rating">
          Nota:
          <input type="number" name="rating" id="rating" value="" />
        </label>
        <label htmlFor="storyline">
          Sinopse:
          <textarea name="storyline" id="storyline" value="" />
        </label>
        <label htmlFor="genre">
          Gênero:
          <select
            value=""
            name="genre"
            id="genre"
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
