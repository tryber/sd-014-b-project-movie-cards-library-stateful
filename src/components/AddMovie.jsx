import React from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.atualiza = this.atualiza.bind(this);
  }

  atualiza({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title titulo={ title } funcao={ this.atualiza } />
        <Subtitle subtitulo={ subtitle } funcao={ this.atualiza } />
        <ImagePath imagem={ imagePath } funcao={ this.atualiza } />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <input
            type="textarea"
            name="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.atualiza }
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
