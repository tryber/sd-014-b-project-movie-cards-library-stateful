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

    this.handleState = this.handleState.bind(this);

  }

  handleState({ target }) {
    this.setState({
      [target.id]: target.value,
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
            id="title"
            onChange={ this.handleState }
            value={ title }
            data-testid="title-input"
          />
        </label>

        <label htmlFor="input-text" data-testid="subtitle-input-label">
          Título
          <input 
            type="text"
            id="subtitle"
            onChange={ this.handleState }
            value={ subtitle }
            data-testid="subtitle-input"
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
