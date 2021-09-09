import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="title-input-label">
        <label htmlFor="title">
          Título
          <input type="text" data-testid="title-input" />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" data-testid="subtitle-input" />
        </label>
        <label htmlFor="imagem" data-testid="image-input-label">
          Imagem
          <input type="image" alt="Imagem do filme inserido" data-testid="image-input" />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
};

export default AddMovie;
