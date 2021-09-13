import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
    };
  }

  onSearchTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle } = this.state;
    const { onSearchTextChange } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}
AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
