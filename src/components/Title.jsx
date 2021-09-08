import React from 'react';

class Title extends React.Component {
  render() {
    const { title, handleChange } = this.props;

    return (
      <label htmlFor="input-text-addMovie" data-testid="title-input-label">
        Título
        <input
          name="title"
          data-testid="title-input"
          value={ title }
          id="input-text-addMovie"
          type="text"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Title;
