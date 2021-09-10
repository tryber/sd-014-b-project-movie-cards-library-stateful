// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import AddRating from './AddRating';
import Genre from './Genre';
import Button from './Button';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <Title value={ title } onChange={ this.handleChange } />
        <Subtitle value={ subtitle } onChange={ this.handleChange } />
        <Image value={ imagePath } onChange={ this.handleChange } />
        <Storyline value={ storyline } onChange={ this.handleChange } />
        <AddRating value={ Number(rating) } onChange={ this.handleChange } />
        <Genre value={ genre } onChange={ this.handleChange } />
        <Button onClick={ (event) => onClick(event, this.state) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
