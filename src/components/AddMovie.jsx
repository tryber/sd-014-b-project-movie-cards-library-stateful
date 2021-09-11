// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormsTitle from './Forms/FormsTitle';
import FormsSubtitle from './Forms/FormsSubtitle';
import FormsStoryline from './Forms/FormsStoryline';
import FormsImage from './Forms/FormsImage';
import FormsRating from './Forms/FormsRating';
import FormsGenre from './Forms/FormsGenre';
// import SubmitButton from './Forms/SubmitButton';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
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

  handleClick = () => {
    // event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <FormsTitle title={ title } onChange={ this.handleChange } />
        <FormsSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <FormsImage imagePath={ imagePath } onChange={ this.handleChange } />
        <FormsStoryline storyline={ storyline } onChange={ this.handleChange } />
        <FormsRating rating={ rating } onChange={ this.handleChange } />
        <FormsGenre genre={ genre } onChange={ this.handleChange } />
        {/* <SubmitButton onClick={ this.handleClick } /> */}
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleClick }
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
