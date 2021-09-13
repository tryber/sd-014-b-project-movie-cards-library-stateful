import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="subtitle">
          <input
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="Título" data-testid="title-input-label">
          <input
            type="text"
            name="Título"
            value={ title }
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="imagePath">
          <input
            type="image"
            alt=""
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="subtitle">
          <input
            type="text"
            name="subtitle"
            value={ storyline }
            onChange={ this.handleInputChange }
          />
        </label>
      </form>
    );
  }
}
// <label htmlFor="subtitle">
//   <input
//     type="text"
//     name="subtitle"
//     value={ rating }
//     onChange={ this.handleInputChange } />
// </label>
// <label htmlFor="subtitle">
//   <input type="text" name="subtitle" value={ genre } onChange={ this.handleInputChange } />
// </label>

export default AddMovie;
