import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formData from './form_data';
import LabelAndInput from './LabelAndInput';
import Select from './Select';

class Form extends Component {
  render() {
    const { title, subtitle, imagePath,
      storyline, rating, genre, handleChange, onClick } = this.props;
    const arrayProps = [title, subtitle, imagePath];
    // criação do Array foi em conjunto com o Gustavo Sant'Anna durante uma call, além da reestruturação e organização do projeto como um todo, onde as props estavam no lugar errado e as declarações estavam em conflito. Ele me reexplicou a lógica de declaração da props e me orientou para a reorganização da lógica do projeto.
    return (
      <form data-testid="add-movie-form">
        {formData.map((eachValue, i) => (<LabelAndInput
          key={ i }
          data={ eachValue }
          value={ arrayProps[i] }
          funcParameter={ handleChange }
        />))}
        {/* fazer depois componente textarea */}
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            type="text"
            value={ storyline }
            onChange={ handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={ rating }
            onChange={ handleChange }
          />
        </label>
        <Select genre={ genre } onChange={ handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

Form.propTypes = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  handleChange: PropTypes.func,
  funcAddNewMovie: PropTypes.func,
}).isRequired;

export default Form;
