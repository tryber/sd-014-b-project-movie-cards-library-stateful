// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

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

   this.handleSubmit = this.handleSubmit.bind(this);
   this.AddMovie = this.AddMovie.bind(this);

   handleSubmit() {
       const { onClick } = this.props;

       onClick();

       this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
    });
}
   addMovie(event){
       const{value, name} = event.target;
       this.setState({
           [name]: value,
       });
}
  render() { 
    return (
      <section>
        <form data-testid="add-movie-form">
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </form>
      </section>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
