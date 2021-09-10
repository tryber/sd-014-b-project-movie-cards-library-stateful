import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    const { imagePath, onChange } = this.props;
    
    return (
      <label htmlFor="" data-testid="image-input-label">
        Imagem
        <input
        value={ imagePath }
        type="text"
        name=""
        id=""
        data-testid="image-input"
        onChange={ onChange }
        />
      </label>
    )
  }
}
