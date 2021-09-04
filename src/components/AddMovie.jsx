// implement AddMovie component here
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
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
            name="subtitle"
            value={ subtitle }
            onChange={
              ({ target: { value } }) => { this.setState({ subtitle: value }); }
            }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            ddata-testid="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={
              ({ target: { value } }) => { this.setState({ imagePath: value }); }
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
