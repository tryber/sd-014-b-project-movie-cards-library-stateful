import React from 'react';
import AddSelect from './AddSelect';
import AddInputTitle from './AddInputTitle';
import AddInputSubtitle from './AddInputSubtitle';
import AddInputImage from './AddInputImage';
import AddInputRating from './AddInputRating';
import AddTextArea from './AddTextArea';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddInputTitle value={ title } handleChange={ this.handleChange } />
        <AddInputSubtitle value={ subtitle } handleChange={ this.handleChange } />
        <AddInputImage value={ imagePath } handleChange={ this.handleChange } />
        <AddTextArea value={ storyline } handleChange={ this.handleChange } />
        <AddInputRating value={ rating } handleChange={ this.handleChange } />
        <AddSelect value={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
