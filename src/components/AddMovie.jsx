import React, { Component } from 'react';
import ButtonReset from './ButtonReset';
import RatingInput from './RatingInput';
import SelectInput from './SelectInput';
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

  handleClick = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  
  resetClick = () => {
    const { onClick } = this.props;

    onClick(this.state);
// Usei como fonte para o requisito 14 https://www.freecodecamp.org/news/how-to-clear-input-values-of-dynamic-form-in-react/ 
// E esse para o textArea https://stackoverflow.com/questions/38731271/clear-an-input-field-with-reactjs
    Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
    );
    document.getElementsByTagName("textarea")[0].value = '';

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render(){
    return <form data-testid="add-movie-form" >
        <TextInput handleClick={ this.handleClick } value={ this.state.title } type="title" data="title-input" label="Título"/>
        <TextInput handleClick={ this.handleClick } value={ this.state.subtitle } type="subtitle" data="subtitle-input" label="Subtítulo"/>
        <TextInput handleClick={ this.handleClick } value={ this.state.imagePath } type="image" data="image-input" label="Imagem"/>
        <TextareaInput handleClick={ this.handleClick } value={ this.state.storyline } type="storyline" data="storyline-input" label="Sinopse"/>
        <RatingInput handleClick={ this.handleClick } value={ this.state.rating } type="rating" data="rating-input" label="Avaliação"/>
        <SelectInput handleClick={ this.handleClick } value={ this.state.genre } type="genre" data="genre-input" label="Gênero"/>
        <ButtonReset handleClick={ this.resetClick } label="Adicionar filme"/>
    </form>;
  }
}

export default AddMovie;
