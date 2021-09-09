import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TitleInput from './TitleInput';

export default class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    // this.state = {
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    // };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;
    // const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput value={ title } onChange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
