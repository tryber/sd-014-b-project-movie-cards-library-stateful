// implement AddMovie component here
import React from 'react';
import ImageP from './ImageP';
import InputRating from './InputRating';
import SelectGenre from './SelectGenre';
import Sinopse from './Sinopse';
import Subtitle from './Subtitle';
import Title from './Title';

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
       subtitle: event.target.value,
       title: event.target.value,
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
           <Subtitle value={ subtitle } onChange={ this.handleChange } />
           <Title value={ title } onChange={ this.handleChange } />
           <ImageP value={ imagePath } onChange={ this.handleChange } />
           <Sinopse value={ storyline } onChange={ this.handleChange } />
           <InputRating value={ rating } onChange={ this.handleChange } />
           <SelectGenre />
         </form>
       </section>
     );
   }
}

export default AddMovie;
