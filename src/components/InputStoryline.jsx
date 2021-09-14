import React from 'react';

class InputStoryline extends React.Component {

  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          value={ storyline }
          handleChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>

    );
  }
}

export default InputStoryline;
