import React, { Component } from 'react'

export default class Subtitle extends Component {
  render() {
    const { subtitle, onChange } = this.props;
    
    return (
      <label htmlFor="" data-testid="subtitle-input-label">
        Subtítulo
        <input 
          value={ subtitle }
          type="text"
          name=""
          id=""
          data-testid="subtitle-input"
          onChange={ onChange }
        />
    </label>
    )
  }
}
