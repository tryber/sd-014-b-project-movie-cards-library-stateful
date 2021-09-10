import React from 'react';
import PropTypes from 'prop-types';
import InputDefault from './InputDefault';

class InputsAll extends React.Component {
  render() {
    const { state: { title, subtitle, imagePath }, handleChange } = this.props;
    return (
      <>
        <InputDefault
          text="Título"
          testIdLabel="title-input-label"
          testIdInput="title-input"
          id="search"
          name="title"
          value={ title }
          handleChange={ handleChange }
        />
        <InputDefault
          text="Subtítulo"
          testIdLabel="subtitle-input-label"
          testIdInput="subtitle-input"
          id="subtitle"
          name="subtitle"
          value={ subtitle }
          handleChange={ handleChange }
        />
        <InputDefault
          text="Imagem"
          testIdLabel="image-input-label"
          testIdInput="image-input"
          id="imagem"
          name="imagePath"
          value={ imagePath }
          handleChange={ handleChange }
        />
      </>
    );
  }
}

InputsAll.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputsAll;
