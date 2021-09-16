import React from 'react';

class Title extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ value }
          id="title-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Title;
