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
    this.handle = this.handle.bind(this);
    this.handleButon = this.handleButon.bind(this);
  }

  handleButon(event, func) {
    event.preventDefault();
    func(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handle(event) {
    this.setState({ [event.name]: event.value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onclick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } fun={ this.handle } />
        <Subtitle value={ subtitle } fun={ this.handle } />
        <Image value={ imagePath } fun={ this.handle } />
        <Synopsis value={ storyline } fun={ this.handle } />
        <Ranking value={ rating } fun={ this.handle } />
        <Genrer value={ genre } fun={ this.handle } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ (event) => this.handleButon(event, onclick) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func.isRequired,
};
export default AddMovie;
