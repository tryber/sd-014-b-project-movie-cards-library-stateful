import React, { Component } from 'react';

class SelectInput extends Component {
    render() {  
      return <label data-testid={ this.props.data + "-label"}>
        Gênero
        <select name={ this.props.type } data-testid={ this.props.data } value={ this.props.value }  onChange={ this.props.handleClick }>
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
  }
}

export default SelectInput;