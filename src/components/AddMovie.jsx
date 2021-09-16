import React from 'react';
import PropTypes from 'prop-types';
// import InputImage from './InputImage';
// import InputTitle from './InputTitle';
// import InputSubtitle from './InputSubtitle';
// import InputStoryLine from './InputStoryLine';
// import InputGenre from './InputGenre';
// import InputRating from './InputRating';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick() {
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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { imagePath, title, subtitle, storyline, rating, genre } = this.state;
    return (
      <section>
        <article>
          <form data-testid="add-movie-form">
            <InputImage imagePath={ imagePath } handleChange={ this.handleChange } />
            <InputTitle title={ title } handleChange={ this.handleChange } />
            <InputSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
            <InputStoryLine storyline={ storyline } handleChange={ this.handleChange } />
            <InputRating rating={ rating } handleChange={ this.handleChange } />
            <InputGenre genre={ genre } handleChange={ this.handleChange } />
            <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
              Adicionar filme
            </button>
          </form>
        </article>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
