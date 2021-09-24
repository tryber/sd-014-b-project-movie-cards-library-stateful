import React from 'react';
import PropTypes from 'prop-types';
import useForm from './useForm';
import InputTitle from './Inputs/InputTitle';
import InputSubTitle from './Inputs/InputSubTitle';
import InputStory from './Inputs/InputStory';
import InputImage from './Inputs/InputImage';
import InputRating from './Inputs/InputRating';
import SelectGenre from './Inputs/SelectGenre';

function AddMovie(props) {
  const [{ values }, handleChange, setValues] = useForm();
  const { onClick } = props;

  const handleClick = () => {
    onClick(values);
    setValues({});
  };

  return (
    <form data-testid="add-movie-form">
      <section>
        <InputTitle onChange={ (event) => handleChange(event) } />
        <InputSubTitle onChange={ (event) => handleChange(event) } />
        <InputImage onChange={ (event) => handleChange(event) } />
        <InputStory onChange={ (event) => handleChange(event) } />
        <InputRating onChange={ (event) => handleChange(event) } />
        <SelectGenre onChange={ (event) => handleChange(event) } />
        <section>
          <button
            data-testid="send-button"
            type="button"
            onClick={ () => handleClick() }
          >
            Adicionar filme
          </button>
        </section>
      </section>
    </form>
  );
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
