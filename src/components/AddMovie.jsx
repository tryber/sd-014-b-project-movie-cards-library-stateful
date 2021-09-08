import React from 'react';
import TextImputBlock from './TextImputBlock';

/*
<label htmlFor="subtitle" data-testid="subtitle-input-label">
  Subtítulo
  <input
    name="subtitle"
    id="subtitle"
    value={ subtitle }
    type="text"
    data-testid="subtitle-input"
    onChange={ this.handleChange }
  />
</label>
 */
class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name: targetName } = target;
    const targetValue = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [targetName]: targetValue });
  };

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    const { handleChange } = this;

    return (
      <form data-testid="add-movie-form">
        <TextImputBlock
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          storyline={ storyline }
          handleChange={ handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
