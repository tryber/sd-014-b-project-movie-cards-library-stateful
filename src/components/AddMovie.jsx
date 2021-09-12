// import React, { Component } from 'react';

// class AddMovie extends Component {
//   constructor() {
//     super();

//     this.state = {
//       subtitle: '',
//       title: '',
//       imagePath: '',
//       storyline: '',
//       rating: 0,
//       genre: 'action',
//     };
//   }

//   onClick = () => {

//   }

// handleTitle = (event) => {
//   this.setState({
//     title: event.target.value,
//   });
// }

// handleRating = (event) => {
//   this.setState({
//     rating: event.target.value,
//   });
// }

// render() {
//   const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
//   return (
//     <form data-testid="add-movie-form">
//       <label htmlFor="title" data-testid="title-input-label">
//         Título
//         <input id="title" data-testid="title-input" type="text" value={ title } onChange={ this.handleTitle } />
//       </label>
//       <label htmlFor="inputSubtitle" data-testid="subtitle-input-label">
//         Subtítulo
//         <input id="inputSubtitle" data-testid="subtitle-input" type="text" value={ subtitle } onChange={ this.handleTitle } />
//       </label>
//       <label htmlFor="inputImg" data-testid="image-input-label">
//         Imagem
//         <input id="inputImg" data-testid="image-input" value={ imagePath } onChange={ this.handleTitle } />
//       </label>
//       <label data-testid="storyline-input-label">
//         Sinopse
//         <textarea data-testid="storyline-input" value={ storyline } onChange={ this.handleTitle } />
//       </label>
//       <label data-testid="rating-input-label">
//         Avaliação
//         <input data-testid="rating-input" type="number" value={ rating } onChange={ this.handleRating } />
//       </label>
//       <label data-testid="genre-input-label">
//         Gênero
//         <select data-testid="genre-input" value={ genre } onChange={ this.handleTitle }>
//           <option data-testid="genre-option" value="action">Ação</option>
//           <option data-testid="genre-option" value="comedy">Comédia</option>
//           <option data-testid="genre-option" value="thiller">Suspense</option>
//         </select>
//       </label>
//       <button data-testid="send-button" onClick={ this.onClick }>Adicionar Filme</button>
//     </form>
//   );
// }
// }

// export default AddMovie;
