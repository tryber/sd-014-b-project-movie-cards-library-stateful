import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    const { title, onChange } = this.props;

    return (
      <label htmlFor="" data-testid="subtitle-input-label">
        Título
        <input value={ title }
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
