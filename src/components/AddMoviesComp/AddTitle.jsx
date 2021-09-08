import React from 'react';

export default class AddMovie extends React.Component {
  render() {
    const title = this.props;
    return (
      <label htmlFor="title-input" ata-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ () => { } }
        />
      </label>
    );
  }
}
