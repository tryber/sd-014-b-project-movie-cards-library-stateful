import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.functionCharge = this.functionCharge.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  functionCharge({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              value={ title }
              data-testid="title-input"
              id="title-input"
              onChange={ this.functionCharge }
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={ subtitle }
              onChange={ this.functionCharge }
              id="subtitle-input"
              data-testid="subtitle-input"
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              name="imagePath"
              value={ imagePath }
              onChange={ this.functionCharge }
              id="image-input"
              data-testid="image-input"
            />
          </label>
        </form>
      </section>
    );
  }
}

export default AddMovie;
