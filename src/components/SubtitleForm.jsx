import React from 'react';

class SubtitleForm extends React.Component {
  render() {
    return (
      <label
        htmlFor="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo:
        <input
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}
export default SubtitleForm;
