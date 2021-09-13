import React from 'react';

class Storyline extends React.Component {
  render() {
    return (
      <label htmlFor="subtitle">
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
