import React from 'react';

class Storyline extends React.Component {
  render() {
    return (
      <label htmlFor="subtitle" data-testid="storyline-input-label">
        <input
          type="text"
          name="subtitle"
          value={ storyline }
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }
}

export default Storyline;
