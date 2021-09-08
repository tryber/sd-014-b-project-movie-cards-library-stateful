import React from 'react';

class Subtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;

    return (
      <label htmlFor="input-subtitle-addMovie" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          id="input-subtitle-addMovie"
          type="text"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Subtitle;
