import React from 'react';
import PropTypes from 'prop-types';
import Labels from './Labels';

class AddMoviePartI extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, func } = this.props;
    return (
      <div>
        <Labels
          dataLabel="title-input-label"
          textLabel="Título"
          dataInput="title-input"
          func={ func }
          value={ title }
          name="title"
        />
        <Labels
          dataLabel="subtitle-input-label"
          textLabel="Subtítulo"
          dataInput="subtitle-input"
          func={ func }
          value={ subtitle }
          name="subtitle"
        />
        <Labels
          dataLabel="image-input-label"
          textLabel="Imagem"
          dataInput="image-input"
          func={ func }
          value={ imagePath }
          name="imagePath"
        />
        <Labels
          dataLabel="storyline-input-label"
          textLabel="Sinopse"
          dataInput="storyline-input"
          func={ func }
          value={ storyline }
          name="storyline"
        />
      </div>
    );
  }
}

AddMoviePartI
  .propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
  };

export default AddMoviePartI;
