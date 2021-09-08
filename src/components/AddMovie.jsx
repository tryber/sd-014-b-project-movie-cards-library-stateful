import React from 'react';
import InputText from './InputText';
// import SelectForm from './SelectForm';

class AddMovies extends React.Component {
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
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputText
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            name="storyline"
            id="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
          />
        </label>
        {/* <label htmlFor="rating">
          Nota:
          <input type="number" name="rating" id="rating" value="" />
        </label>
        <SelectForm /> */}
      </form>
    );
  }
}

export default AddMovies;
