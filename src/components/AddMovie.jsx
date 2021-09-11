// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import CustomInput from './CustomInput';
import SelectInput from './SelectInput';
import ButtonClick from './ButtonClick';

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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { onClick } = this.props;

    onClick();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <CustomInput
          value={ title }
          data="title-input"
          id="title"
          Ref="Título"
          onChange={ this.handleChange }
        />
        <CustomInput
          value={ subtitle }
          data="subtitle-input"
          id="subtitle"
          Ref="Subtítulo"
          onChange={ this.handleChange }
        />
        <CustomInput
          value={ imagePath }
          data="image-input"
          id="imagePath"
          Ref="Imagem"
          onChange={ this.handleChange }
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            onChange={ this.handleChange }
            value={ storyline }
            name="storyline"
            data-testid="storyline-input"
            id="storyline"
          />
        </label>
        <CustomInput
          value={ rating }
          data="rating-input"
          id="rating"
          Ref="Avaliação"
          type="number"
          onChange={ this.handleChange }
        />
        <SelectInput genre={ genre } onChange={ this.handleChange } />
        <ButtonClick click={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
