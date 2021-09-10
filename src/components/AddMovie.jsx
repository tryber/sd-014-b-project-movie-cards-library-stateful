// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubTitle from './SubtitleInput';
import ImageInput from './ImageInput';
import TextArea from './TextArea';
import RaingInput from './RatingInput';
import SelectInput from './SelectInput';

class addMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  initialState = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  atualiza = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {/* Label do título */}
        <TitleInput title={ title } atualiza={ this.atualiza } />
        {/* Label do Subtitulo */}
        <SubTitle subtitle={ subtitle } atualiza={ this.atualiza } />
        {/* Label do image */}
        <ImageInput imagePath={ imagePath } atualiza={ this.atualiza } />
        {/* Label do textarea */}
        <TextArea storyline={ storyline } atualiza={ this.atualiza } />
        {/* Label da nota */}
        <RaingInput rating={ rating } atualiza={ this.atualiza } />
        {/* Label do gênero */}
        <SelectInput genre={ genre } atualiza={ this.atualiza } />
        {/* Butão que adiciona filmes */}
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.initialState }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

addMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default addMovie;
