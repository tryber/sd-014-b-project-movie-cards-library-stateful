import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';
import Story from './Story';
import Genre from './Genre';
import InputRating from './InputRating.jsx';

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
  <form data-testid="add-movie-form">
    <Image imagePath={ imagePath } handleChange={ this.handleChange } />
    <Title title={ title } handleChange={ this.handleChange } />
    <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
    <Story storyline={ storyline } handleChange={ this.handleChange } />
    <InputRating rating={ rating } handleChange={ this.handleChange } />
    <Genre genre={ genre } handleChange={ this.handleChange } />
    <button type="submit" data-testid="send-button" onClick={ this.handleClick }>
      Adicionar filme
    </button>
  </form>
</section>
);
}
}

AddMovie.propTypes = {
onClick: PropTypes.func.isRequired,
};

export default AddMovie;

