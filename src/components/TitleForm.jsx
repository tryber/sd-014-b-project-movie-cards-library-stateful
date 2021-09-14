import React from 'react';

class TextForm extends React.Component {
  render() {
    return (
      <label
        htmlFor="title"
        data-testid="title-input-label"
      >
        Título:
        <input
          data-testid="title-input"
        />
      </label>
    );
  }
}
export default TextForm;
