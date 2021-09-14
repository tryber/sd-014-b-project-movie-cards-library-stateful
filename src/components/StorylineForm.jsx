import React from 'react';

class Storyline extends React.Component {
  render() {
    return (
      <label
        htmlFor="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse:
        <textarea
          data-testid="storyline-input"
        />
      </label>
    );
  }
}
export default Storyline;
