import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  constructor() {
    super();
    this.state = { storyline: '' };
  }

  render() {
    const { change } = this.props;
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          onChange={ change }
          value={ storyline }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  change: PropTypes.func.isRequired,
};

export default TextArea;