import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { storyline, atualiza } = this.props;
    return (
      <label htmlFor="textArea" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="textArea"
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ atualiza }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  storyline: PropTypes.string.isRequired,
  atualiza: PropTypes.func.isRequired,
};

export default TextArea;
