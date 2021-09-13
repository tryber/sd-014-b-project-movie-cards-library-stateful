import React from 'react';

class SinopseNovo extends React.Component {
  render() {
    return (
      <label htmlFor="sinopseNovo" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="sinopseNovo"
          // value={ this.state.storyline }
          data-testid="storyline-input"
          onChange={ this.onClick }
        />
      </label>
    );
  }
}

export default SinopseNovo;
