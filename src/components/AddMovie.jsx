// implement AddMovie component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    const { title, subtitle } = this.state;
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title-input"
            value={ title }
            onChange={
              ({ target: { value } }) => { this.setState({ title: value }); }
            }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle-input"
            value={ subtitle }
            onChange={
              ({ target: { value } }) => { this.setState({ subtitle: value }); }
            }
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onclick: PropTypes.func.isRequired,
// };

export default AddMovie;
