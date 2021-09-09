// implement AddMovie component here
import React from 'react';
import PropType from 'prop-types';
import Title from './AddMovie Componentes/Title';
import Subtitle from './AddMovie Componentes/Subtitle';
import ImagePatch from './AddMovie Componentes/ImagePatch';
import Storyline from './AddMovie Componentes/Storyline';
import Rating from './AddMovie Componentes/Rating';
import Genre from './AddMovie Componentes/Genre';
import SendButton from './AddMovie Componentes/SendButton';

class AddMovie extends React.Component {
  constructor() {
    super();

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

  handleChange({ target }) {
    const { onClick } = this.props;
    const { value, name } = target;
    if (name !== 'sendButton') {
      this.setState({ [name]: value });
    } else {
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      });
    }
  }

  render() {
    const { onClick } = this.props;
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
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <ImagePatch value={ imagePath } handleChange={ this.handleChange } />
        <Storyline value={ storyline } handleChange={ this.handleChange } />
        <Rating value={ rating } handleChange={ this.handleChange } />
        <Genre value={ genre } handleChange={ this.handleChange } />
        <SendButton onClick={ onClick } handleChange={ this.handleChange } />
      </form>
    );
  }
}

AddMovie.PropType = {
  onClick: PropType.func.isRequired,
};

export default AddMovie;
