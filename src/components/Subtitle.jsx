import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitulo, funcao } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitulo }
          data-testid="subtitle-input"
          onChange={ funcao }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitulo: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default Subtitle;
