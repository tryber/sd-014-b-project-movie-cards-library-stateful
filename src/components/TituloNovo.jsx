import React from 'react';

class TituloNovo extends React.Component {
  render() {
    return (
      <label htmlFor="tituloNovo" data-testid="title-input-label">
        Título
        <input
          id="tituloNovo"
          type="text"
          data-testid="subtitle-input"
          onChange={ this.onClick }
        />
      </label>
    );
  }
}

export default TituloNovo;
