import React from 'react';

class Number extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="number-input">
        Avaliação
        <input
          type="text"
          data-testid="rating-input"
          id="number-input"
          name="rating"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Number;
