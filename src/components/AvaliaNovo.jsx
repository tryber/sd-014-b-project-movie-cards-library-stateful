import React from 'react';

class AvaliaNovo extends React.Component {
  render() {
    return (
      <label htmlFor="avaliaNovo" data-testid="rating-input-label">
        Avaliação
        <input
          id="avaliaNovo"
          type="number"
          value="0"
          data-testid="rating-input"
          onChange={ this.onClick }
        />
      </label>
    );
  }
}

export default AvaliaNovo;
