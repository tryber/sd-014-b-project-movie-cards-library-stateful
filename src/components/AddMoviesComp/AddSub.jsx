import React from 'react';

export default class AddMovie extends React.Component {
  render() {
    const subtitle = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ () => { } }
        />
      </label>
    );
  }
}
