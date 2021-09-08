import React from 'react';

class SelectForm extends React.Component {
  render() {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero:
        <select data-testid="genre-input" value="" name="genre" id="genre">
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectForm;
