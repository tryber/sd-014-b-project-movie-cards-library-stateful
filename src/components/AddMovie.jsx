import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import StandardInput from './StandardInput';
import StandardTextarea from './StandardTextarea';
import StandardSelect from './StandardSelect';
import StandardButton from './StandardButton';

const arrayOfArrays = [
  ['Título', 'title', 'title-input', 'text'],
  ['Subtítulo', 'subtitle', 'subtitle-input', 'text'],
  ['Imagem', 'imagePath', 'image-input', 'text'],
  ['Sinopse', 'storyline', 'storyline-input'],
  ['Avaliação', 'rating', 'rating-input', 'number'],
  ['Gênero', 'genre', 'genre-input',
    [{ Ação: 'action' }, { Comédia: 'comedy' }, { Suspense: 'thriller' }],
  ],
  ['Adicionar filme', 'send-button'],
];

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

    this.changer = this.changer.bind(this);
    this.reset = this.reset.bind(this);
  }

  changer({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  reset() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const array = arrayOfArrays;

    return (
      <form data-testid="add-movie-form">
        <StandardInput propsInfoArray={ [...array[0], title, this.changer] } />
        <StandardInput propsInfoArray={ [...array[1], subtitle, this.changer] } />
        <StandardInput propsInfoArray={ [...array[2], imagePath, this.changer] } />
        <StandardTextarea propsInfoArray={ [...array[3], storyline, this.changer] } />
        <StandardInput propsInfoArray={ [...array[4], rating, this.changer] } />
        <StandardSelect propsInfoArray={ [...array[5], genre, this.changer] } />
        <StandardButton
          propsInfoArray={ [...array[6], onClick, this.state, this.reset] }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.callback,
}.isRequired;

export default AddMovie;
