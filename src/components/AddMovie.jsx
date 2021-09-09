// implement AddMovie component here
import React, { Component } from 'react';
import FormsTitle from './Forms/FormsTitle';
import FormsSubtitle from './Forms/FormsSubtitle';
import FormsStoryline from './Forms/FormsStoryline';
import FormsImage from './Forms/FormsImage';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      // rating,
      // genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <FormsTitle title={ title } onChange={ this.handleChange } />
        <FormsSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <FormsImage imagePath={ imagePath } onChange={ this.handleChange } />
        <FormsStoryline storyline={ storyline } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
