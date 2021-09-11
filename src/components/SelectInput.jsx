import React from 'react';

class SelectInput extends React.Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor={ genre }>
        Gênero
        <select
          onChange={ onChange }
          name="genre"
          value={ genre }
          id={ genre }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectInput;
