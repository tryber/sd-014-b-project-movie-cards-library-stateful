// implement AddMovie component here
import React from 'react';
import Title from './AddMovie Components/title';
import Subtitle from './AddMovie Components/subtitle';
import Image from './AddMovie Components/image';

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
  }

  handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <h1>um form maravilhoso</h1>
          <Title value={ title } callback={ this.handleChange } />
          <br />
          <Subtitle value={ subtitle } callback={ this.handleChange } />
          <br />
          <Image value={ imagePath } callback={ this.handleChange } />
          <br />
        </form>
      </div>
    );
  }
}

export default AddMovie;
