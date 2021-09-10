import React from 'react';

class SubtituloNovo extends React.Component {
  render() {
    return (
      <label htmlFor="subtituloNovo" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtituloNovo"
          type="text"
          data-testid="title-input"
          onChange={ this.onClick }
        />
      </label>
    );
  }
}

export default SubtituloNovo;
