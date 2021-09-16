import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './addMovieComponetes/Subtitle';
import Title from './addMovieComponetes/Title';
import Image from './addMovieComponetes/Image';
import TextArea from './addMovieComponetes/TextArea';
import Number from './addMovieComponetes/Number';
import Select from './addMovieComponetes/Select';

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

  handleClick = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleButton = () => {
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
  };
  // Peguei referências para fazer esse requisito nesses sites
  // https://pt-br.reactjs.org/docs/hooks-state.html
  // https://imasters.com.br/front-end/entendendo-estado-de-componentes-com-react-na-pratica

  handleSumit = (event) => {
    event.preventDefault();
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form" onSubmit={ this.handleSumit }>
          <Title value={ title } onChange={ this.handleClick } />
          <Subtitle value={ subtitle } onChange={ this.handleClick } />
          <Image value={ imagePath } onChange={ this.handleClick } />
          <TextArea value={ storyline } onChange={ this.handleClick } />
          <Number value={ rating } onChange={ this.handleClick } />
          <Select value={ genre } onChange={ this.handleClick } />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ this.handleButton }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
