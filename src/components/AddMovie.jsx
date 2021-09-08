import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.upDateState = this.upDateState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  };
  
  upDateState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título:
          <input
            type="text"
            data-testid="title-input"
            onChange={ this.upDateState }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            data-testid="subtitle-input"
            onChange={this.upDateState}
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            onChange={this.upDateState}
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            data-testid="storyline-input"
            onChange={this.upDateState}
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
