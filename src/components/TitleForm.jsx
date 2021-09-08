import React from 'react';
import PropTypes from 'prop-types';

class TitleForm extends React.Component {
  render() {
    const { title, myFunc } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          type="text"
          value={ title }
          data-testid="title-input"
          onChange={ myFunc }
        />
      </label>
    );
  }
}

TitleForm.propTypes = {
  title: PropTypes.string.isRequired,
  myFunc: PropTypes.func.isRequired,
};

export default TitleForm;
