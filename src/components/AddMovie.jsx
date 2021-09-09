import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

// AddMovie.PropTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
