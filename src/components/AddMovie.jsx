import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <input type="text" data-testid="title-input"/>
        <label htmlFor="title-input-label" data-testid="title-input-label">Título</label>
      </form>
    );
  }
}

export default AddMovie;
