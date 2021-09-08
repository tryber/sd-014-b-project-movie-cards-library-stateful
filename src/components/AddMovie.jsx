import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import StandardTextInput from './StandardTextInput';
import StandardTextarea from './StandardTextarea';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        { onClick + rating + genre }
        <StandardTextInput
          propsInfoArray={
            ['Título', 'title', 'title-input', title, this.handleChange]
          }
        />
        <StandardTextInput
          propsInfoArray={
            ['Subtítulo', 'subtitle', 'subtitle-input', subtitle, this.handleChange]
          }
        />
        <StandardTextInput
          propsInfoArray={
            ['Imagem', 'imagePath', 'image-input', imagePath, this.handleChange]
          }
        />
        <StandardTextarea
          propsInfoArray={
            ['Sinopse', 'storyline', 'storyline-input', storyline, this.handleChange]
          }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.callback,
}.isRequired;

export default AddMovie;
