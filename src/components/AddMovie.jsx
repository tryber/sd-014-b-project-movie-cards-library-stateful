// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
    constructor (props){
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


    render(){
     <form data-testid="add-movie-form">
         a
     </form>
    }


   return()
}
}

export default AddMovie;

//Typically, in React constructors are only used for two purposes:
//Initializing local state by assigning an object to this.state.
//Binding event handler methods to an instance
// You should not call setState() in the constructor(). Instead,
// if your component needs to use local state, assign the initial state to this.state directly in the constructor:
