import React from 'react';

class InputTitle extends React.Component {

  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          value={ title }
          handleChange={ handleChange }
          data-testid="title-input"
        />
      </label>

    );
  }
}

export default InputTitle;
