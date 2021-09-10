import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título:
        <input
          type="text"
          id="title-input"
          value={ title }
          data-testid="title-input"
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleInput;
