import React from 'react';
import SelectForm from './SelectForm';
import TitleForm from './TitleForm';
import SubtitleForm from './SubtitleForm';
import ImagePathForm from './ImagePathForm';
import StorylineForm from './StorylineForm';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
    };
  }

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }

    render() {
      const { rating } = this.state;

      return (
        <div>
          <form data-testid="add-movie-form">
            <TitleForm
              handleChange={ this.handleChange }
            />
            <SubtitleForm
              handleChange={ this.handleChange }
            />
            <ImagePathForm
              handleChange={ this.handleChange }
            />
            <StorylineForm
              handleChange={ this.handleChange }
            />
            <label
              htmlFor="rating"
              data-testid="rating-input-label"
            >
              Avaliação:
              <input
                data-testid="rating-input"
                name="rating"
                type="number"
                onChange={ this.handleChange }
                value={ rating }
              />
            </label>
            <SelectForm
              handleChange={ this.handleChange }
            />
          </form>
        </div>
      );
    }
}

export default AddMovie;
