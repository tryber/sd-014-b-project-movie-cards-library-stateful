import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
