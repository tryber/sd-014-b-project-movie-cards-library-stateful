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
    };
  }

  // handleChange(event) {
  //   this.setState({ title: event.target.value });
  // }

  handleChange = ({ target }) => {
    this.setState({ [name]: target.value });
  };

  render() {
    const { title, subtitle } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor={ title } data-testid="title-input-label">
          Título
          <input
            id={ title }
            value={ title }
            type="text"
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor={ subtitle } data-testid="subtitle-input-label">
          Subtítulo
          <input
            id={ subtitle }
            value={ subtitle }
            type="text"
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
