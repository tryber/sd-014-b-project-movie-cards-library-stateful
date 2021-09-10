import React, { Component } from 'react'

export default class Rating extends Component {
  render() {
    const { rating, onChange } = this.props;

    return (
      <label htmlFor="" data-testid="rating-input-label">
        Avaliação
        <input value={ rating }
        type="number"
        name=""
        id=""
        onChange={ onChange }
        />
      </label>
    )
  }
}
