import React from 'react';

class AddTitle extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="add-title" data-testid="title-input-label">
        Título
        <input
          name="add-title"
          type="text"
          id="text"
          data-testid="title-input"
          value={ value }
          onChange={ handleChange } // The onchange event occurs when the value of an element has been changed.
        />
      </label>
    );
  }
}

export default AddTitle;
