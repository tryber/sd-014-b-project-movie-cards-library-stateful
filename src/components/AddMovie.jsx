import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Synopsis from './StoryLine';
import Ranking from './Ranking';

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
    this.handle = this.handle.bind(this);
  }

  handle(event) {
    this.setState({ [event.name]: event.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } fun={ this.handle } />
        <Subtitle value={ subtitle } fun={ this.handle } />
        <Image value={ imagePath } fun={ this.handle } />
        <Synopsis value={ storyline } fun={ this.handle } />
        <Ranking value={ rating } fun={ this.handle } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func,
};
export default AddMovie;
