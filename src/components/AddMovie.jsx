import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Synopsis from './StoryLine';
import Ranking from './Ranking';
import Genrer from './Genrer';

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
    this.Submit = this.Submit.bind(this);
  }

  handle = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  Submit() {
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
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { Submit, handle } = this;
    const { onClick } = this.props;
    return (
      <form onSubmit={ Submit } data-testid="add-movie-form">
        <Title value={ title } onChange={ handle } />
        <Subtitle value={ subtitle } onChange={ handle } />
        <Image value={ imagePath } onChange={ handle } />
        <Synopsis value={ storyline } onChange={ handle } />
        <Ranking value={ Number(rating) } callback={ handle } />
        <Genrer value={ genre } onChange={ handle } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
