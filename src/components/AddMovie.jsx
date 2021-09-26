import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Synopsis from './StoryLine';
import Ranking from './Ranking';
import Genrer from './Genrer';

class addMovie extends React.Component {
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  Submit = () => {
    console.log(2);
  }

  click = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    const { subtitle } = this.state;
    const test = subtitle;
    console.log(test);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, click } = this;
    return (
      <form data-testid="add-movie-form" onSubmit={ this.Submit }>
        <Title value={ title } onChange={ handleChange } />
        <Subtitle value={ subtitle } onChange={ handleChange } />
        <Image value={ imagePath } onChange={ handleChange } />
        <Synopsis value={ storyline } onChange={ handleChange } />
        <Ranking value={ Number(rating) } callback={ handleChange } />
        <Genrer value={ genre } onChange={ handleChange } />
        <button type="submit" onClick={ click } data-testid="send-button">
          Adicionar filme
        </button>
      </form>

    );
  }
}

addMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default addMovie;
