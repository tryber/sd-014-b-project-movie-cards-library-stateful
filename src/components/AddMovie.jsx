import React, { Component } from 'react';
import TitleInput from './TitleInput';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.initialState = this.initialState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  initialState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange({ target }) {
    this.setState({
      title: target.value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form" action="">
        <TitleInput title={ title } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
