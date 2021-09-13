import React from 'react';
import Sinopse from './Sinopse';
import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';
import Rating from './Rating';
import Select from './Select';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <Title value={ title } onChange={ this.handleChange } />
          <Subtitle value={ subtitle } onChange={ this.handleChange } />
          <Image value={ imagePath } onChange={ this.handleChange } />
          <Sinopse value={ storyline } onChange={ this.handleChange } />
          <Rating value={ rating } onChange={ this.handleChange } />
          <Select />
        </form>
      </section>
    );
  }
}

export default AddMovie;
