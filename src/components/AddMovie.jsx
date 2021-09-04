import React from 'react';

export default class AddMovie extends React.Component {
  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label ata-testid="title-input-label">
          Título
          <input data-testid="title-input" type="text" value={ title } onChange={() => {}}/>
          </label>
      </form>
    )
  }
}
