import React from 'react';
import TituloNovo from './TituloNovo';
import SubtituloNovo from './SubtituliNovo';
import ImagemNovo from './ImagemNovo';
import SinopseNovo from './SinopseNovo';
import AvaliaNovo from './AvaliaNovo';
import GeneroNovo from './GeneroNovo';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);

    // this.state = {
    //   subtitle: '',
    //   title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: '',
    // };
  }

  onClick(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <TituloNovo />
        <SubtituloNovo />
        <ImagemNovo />
        <SinopseNovo />
        <AvaliaNovo />
        <GeneroNovo />
        <button
          type="button"
          data-testid="send-button"
          onClick=""
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
