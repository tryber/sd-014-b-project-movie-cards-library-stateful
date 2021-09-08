// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

class addMovie extends React.Component {
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

  atualiza = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    // const { onclick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {/* Label do título */}
        <label htmlFor="testInput" data-testid="title-input-label">
          Título
          <input
            id="testInput"
            type="text"
            value={ title }
            name="title"
            data-testid="title-input"
            onChange={ this.atualiza }
          />
        </label>
        {/* Label do Subtitulo */}
        <label htmlFor="testSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="testSubtitle"
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.atualiza }
          />
        </label>
        {/* Desmanchar essa div para fazer o requisito 10 */}
        <div>
          {imagePath}
          {storyline}
          {rating}
          {genre}
        </div>
      </form>
    );
  }
}

// addMovie.propTypes = {
//   subtitle: PropTypes.string,

// };

export default addMovie;
