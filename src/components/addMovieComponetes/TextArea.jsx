import React from 'react';

class TextArea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input" htmlFor="textArea-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          id="textArea-input"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default TextArea;
