import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  titleInputOnChange = (event) => {
    this.setState({
      title: event.target.value,
    })
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input id="title-input" data-testid="title-input" onChange={ this.titleInputOnChange } />
        </label>
      </form>
    );
  }
}

export default AddMovie;
