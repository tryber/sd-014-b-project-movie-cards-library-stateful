import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }

  handleChage = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titulo">
          Título
          <input
            type="text"
            id="titulo"
            name="title"
            value={ title }
            onChange={ this.handleChage }
            data-testid="title-input"
          />

        </label>
      </form>
    );
  }
}

export default AddMovie;
