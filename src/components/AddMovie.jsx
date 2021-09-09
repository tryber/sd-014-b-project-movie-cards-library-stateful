// implement AddMovie component here
import React from 'react';
import InputTitle from './inputs-components/InputTitle';
import InputSubtitle from './inputs-components/InputSubtitle';
import InputImage from './inputs-components/InputImage';
import InputTextArea from './inputs-components/InputTextArea';
import InputNumber from './inputs-components/InputNumber';
import InputSelect from './inputs-components/InputSelect';

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

    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <InputTitle value={ title } onChange={ this.addMovie } />
          <InputSubtitle value={ subtitle } onChange={ this.addMovie } />
          <InputImage value={ imagePath } onChange={ this.addMovie } />
          <InputTextArea value={ storyline } onChange={ this.addMovie } />
          <InputNumber value={ rating } onChange={ this.addMovie } />
          <InputSelect value={ genre } onChange={ this.addMovie } />
        </form>
      </section>
    );
  }
}

export default AddMovie;
