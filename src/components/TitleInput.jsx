import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { title, atualiza } = this.props;
    return (
      <label htmlFor="textInput" data-testid="title-input-label">
        Título
        <input
          id="textInput"
          type="text"
          value={ title }
          name="title"
          data-testid="title-input"
          onChange={ atualiza }
        />
      </label>);
  }
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  atualiza: PropTypes.func.isRequired,
};

export default TitleInput;
