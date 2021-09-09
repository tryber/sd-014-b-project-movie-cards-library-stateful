// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleSubmit() {
    const { onClick } = this.props;

    onClick();

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
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
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.handleSubmit }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
