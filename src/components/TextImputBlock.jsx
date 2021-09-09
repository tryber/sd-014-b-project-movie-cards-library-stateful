import React from 'react';
import PropTypes from 'prop-types';
import SimpleImput from './SimpleImput';

class TextImputBlock extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, handleChange } = this.props;

    return (
      <>
        <SimpleImput
          name="title"
          value={ title }
          inputType="text"
          labelText="Título"
          inputTestId="title-input"
          labelTestId="title-input-label"
          onChangeCallback={ handleChange }
        />
        <SimpleImput
          name="subtitle"
          value={ subtitle }
          inputType="text"
          labelText="Subtítulo"
          inputTestId="subtitle-input"
          labelTestId="subtitle-input-label"
          onChangeCallback={ handleChange }
        />
        <SimpleImput
          name="imagePath"
          value={ imagePath }
          inputType="text"
          labelText="Imagem"
          inputTestId="image-input"
          labelTestId="image-input-label"
          onChangeCallback={ handleChange }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            id="storyline"
            data-testid="storyline-input"
            onChange={ handleChange }
          />
        </label>
      </>
    );
  }
}

TextImputBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextImputBlock;
