import React, { Component } from 'react'

export default class Storyline extends Component {
  render() {
    const { storyline, onChange } = this.props;
    
    return (
      <label htmlFor="" data-testid="storyline-input-label">
        Sinopse
        <textarea value={ storyline } 
        name="" 
        id="" 
        cols="30" 
        rows="10" 
        data-testid="storyline-input" 
        onChange={ onChange }>
        </textarea>
      </label>
    )
  }
}
