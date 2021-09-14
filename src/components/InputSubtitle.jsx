import React from 'react';

class InputSubtitle extends React.Component {

  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ subtitle }
          handleChange={ handleChange }
          data-testid="subtitle-input"
        />
      </label>

    );
  }
}

export default InputSubtitle;
