import React, { Component } from 'react';
import TitleInput from './TitleInput';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      // subtitle: '',
      // imagePath: '',
      // storyLine: '',
      // rating: 0,
      // genre: 'action',
    };

    this.initialState = this.initialState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      title: target.value,
    });
  }

  initialState() {
    this.setState({
      title: '',
      // subtitle: '',
      // imagePath: '',
      // storyLine: '',
      // rating: 0,
      // genre: 'action',
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form" action="">
        <TitleInput title={ title } handleChange={ this.handleChange } />
        {/* <SubtitleInput /> */}
      </form>
    );
  }
}

export default AddMovie;
