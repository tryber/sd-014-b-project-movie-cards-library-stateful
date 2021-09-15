import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  changeImage = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="Título">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.changeTitle }
          />
        </label>
        <label htmlFor="Imagem" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.changeImage }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propType = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
