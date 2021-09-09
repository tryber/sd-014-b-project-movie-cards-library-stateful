// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovie Components/title';
import Subtitle from './AddMovie Components/subtitle';
import Image from './AddMovie Components/image';
import Storyline from './AddMovie Components/storyline';
import Rating from './AddMovie Components/rating';
import Genre from './AddMovie Components/genre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitState = this.handleSubmitState.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmitState(event, callback) {
    event.preventDefault();
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <h1>Um form maravilhoso</h1>
          <Title value={ title } callback={ this.handleChange } />
          <br />
          <Subtitle value={ subtitle } callback={ this.handleChange } />
          <br />
          <Image value={ imagePath } callback={ this.handleChange } />
          <br />
          <Storyline value={ storyline } callback={ this.handleChange } />
          <br />
          <Rating value={ rating } callback={ this.handleChange } />
          <br />
          <Genre value={ genre } callback={ this.handleChange } />
          <br />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ (event) => this.handleSubmitState(event, onClick) }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
