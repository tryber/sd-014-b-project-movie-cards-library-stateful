import React, { Component } from 'react';
import TextareaInput from './TextareaInput';
import TextInput from './TextInput';

class AddMovie extends Component {
  constructor(props){
      super(props);

      this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  setLabel = (storyline) => {
      this.setState ({ storyline });
  }

  handleClick = (event) => {
    const { value, name } = event.target;

    console.log(event, value, name  );
    this.setState({ [name]: value });
  }

  /*handleSubmit(event) {
    event.preventDefault();
  }*/

  render(){
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return <form data-testid="add-movie-form" onSubmit={this.handleSubmit}>
        <TextInput handleClick={ this.handleClick } value={ title } type="title" data="title-input" label="Título"/>
        <TextInput handleClick={ this.handleClick } value={ subtitle } type="subtitle" data="subtitle-input" label="Subtítulo"/>
        <TextInput handleClick={ this.handleClick } value={ imagePath } type="image" data="image-input" label="Imagem"/>
        <TextareaInput handleClick={ this.handleClick } value={ storyline } type="storyline" data="storyline-input" label="Sinopse"/>
    </form>;
  }
}

export default AddMovie;
