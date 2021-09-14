import React from 'react';
import PropTypes from 'prop-types';
import InputPadrao from './InputPadrao';

class Inputs extends React.Component {
  render() {
    const { state: { title, subtitle, imagePath }, handleChange } = this.props;
    return (
      <>
        <InputPadrao
          dataid="title-input-label"
          name="title"
          description="Título"
          id="title-input"
          value={ title }
          handleChange={ handleChange }
        />
        <InputPadrao
          dataid="subtitle-input-label"
          name="subtitle"
          description="Subtítulo"
          id="subtitle-input"
          value={ subtitle }
          handleChange={ handleChange }
        />
        <InputPadrao
          dataid="image-input-label"
          name="imagePath"
          description="Imagem"
          id="image-input"
          value={ imagePath }
          handleChange={ handleChange }
        />
      </>
    );
  }
}

Inputs.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Inputs;
