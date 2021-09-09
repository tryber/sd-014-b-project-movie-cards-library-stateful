// implement AddMovie component here
import React, { Component } from 'react';
import AddTitle from './AddMovieComponents/AddTitle';
import AddSubTitle from './AddMovieComponents/AddSubtitle';
import AddImage from './AddMovieComponents/AddImage';
import AddStoryLine from './AddMovieComponents/AddStoryLine';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { // define o estado inicial das propriedades
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

    handleChange = (event) => { // seleciona os eventos de input
      const { name, value } = event.target;
      this.setState({ // update the state key corresponding to the given input name:
        [name]: value, // setState() automatically merges a partial state into the current state
      });
    } // handleChange vai definir o evento alvo e o que fazer com aquele resultado recebido

    render() {
      const { title, subtitle, imagePath, storyline, rating, genre } = this.state; // renderiza os estados inicias
      return (
        <form data-testid="add-movie-form">
          <AddTitle handleChange={ this.handleChange } value={ title } />
          <AddSubTitle handleChange={ this.handleChange } value={ subtitle } />
          <AddImage handleChange={ this.handleChange } value={ imagePath } />
          <AddStoryLine handleChange={ this.handleChange } value={ storyline } />

        </form>
      );
    }
}

export default AddMovie;

// Typically, in React constructors are only used for two purposes:
// Initializing local state by assigning an object to this.state.
// Binding event handler methods to an instance
// You should not call setState() in the constructor(). Instead,
// if your component needs to use local state, assign the initial state to this.state directly in the constructor:
// handleChange:
// When you need to handle multiple controlled input elements, you can add a name attribute to each element and let
// the handler function choose what to do based on the value of event.target.name.
