import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }

  }

  handleState({ target }) {

    this.setState({
      title: target.value,
    });
  }

  render() {

    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="input-text" data-testid="title-input-label">
          Título
          <input 
            type="text"
            id="input-text"
            onChange={ this.handleState }
            value={ title }
            data-testid="title-input"
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
