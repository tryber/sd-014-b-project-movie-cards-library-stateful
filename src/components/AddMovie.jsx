import React from 'react';
import PropTypes from 'prop-types';
import RatingInput from './RatingInput';
import TextInput from './TextInput';
import AddButton from './AddButton';
import SubTitle from './SubTitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';

class AddMovie extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <div className="title-and-sub">
          <TextInput value={ title } handleChange={ this.handleChange } />
          <SubTitle value={ subtitle } handleChange={ this.handleChange } />
        </div>
        <div className="col genre-and-storyline">
          <label htmlFor="input-genre" data-testid="genre-input-label">
            Gênero
            <select
              className="form-select"
              data-testid="genre-input"
              id="input-genre"
              name="genre"
              value={ genre }
              onChange={ this.handleChange }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </div>
        <div className="image-and-rating">
          <RatingInput value={ rating } handleChange={ this.handleChange } />
          <ImagePath value={ imagePath } handleChange={ this.handleChange } />
        </div>
        <div className="btn-storyline">
          <StoryLine value={ storyline } handleChange={ this.handleChange } />
        </div>
        <div>
          <AddButton handleClick={ this.handleClick } />
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
