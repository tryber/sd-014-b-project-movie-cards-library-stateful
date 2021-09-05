import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputTextarea from './InputTextarea';
import InputNumber from './InputNumber';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    // this.onClick = this.onClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
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
        <InputText
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <InputTextarea
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <InputNumber rating={ rating } handleChange={ this.handleChange } />
        <InputSelect genre={ genre } handleChange={ this.handleChange } />
        <button type="submit" data-testid="send-button" onClick={ onClick(this.state) }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
