import React from 'react';

class AddStoryLine extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default AddStoryLine;
