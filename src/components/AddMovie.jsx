import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.functionCharge = this.functionCharge.bind(this);
    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
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
    const { title } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="text-input" data-testid="title-input-label">
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
        </form>
      </section>
    );
  }
}

export default AddMovie;
