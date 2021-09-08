import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  atualizaFilme(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="addMovie" data-testid="title-input-label">
          <input name="addMovie" value={ title } onChange={ this.atualizaFilme } />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
