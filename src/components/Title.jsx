import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { titulo, funcao } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ titulo }
          onChange={ funcao }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = {
  titulo: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default Title;
