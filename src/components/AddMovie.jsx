import React, { Component } from 'react';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      // imagePath: '',
      // storyLine: '',
      // rating: 0,
      // genre: 'action',
    };

    this.initialState = this.initialState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  initialState() {
    this.setState({
      title: '',
      subtitle: '',
      // imagePath: '',
      // storyLine: '',
      // rating: 0,
      // genre: 'action',
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form" action="">
        <TitleInput title={ title } onChange={ this.handleChange } />
        <SubtitleInput subtitle={ subtitle } onChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
