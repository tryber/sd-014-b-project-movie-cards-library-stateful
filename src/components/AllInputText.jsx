import React from 'react';
import PropTypes from 'prop-types';
import CreateLabel from './CreateLabel';

class AllInputText extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, func } = this.props;
    return (
      <div>
        <CreateLabel
          dataLabel="title-input-label"
          textLabel="Título"
          dataInput="title-input"
          func={ func }
          value={ title }
          name="title"
        />
        <CreateLabel
          dataLabel="subtitle-input-label"
          textLabel="Subtítulo"
          dataInput="subtitle-input"
          func={ func }
          value={ subtitle }
          name="subtitle"
        />
        <CreateLabel
          dataLabel="image-input-label"
          textLabel="Imagem"
          dataInput="image-input"
          func={ func }
          value={ imagePath }
          name="imagePath"
        />
        <CreateLabel
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

AllInputText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default AllInputText;
