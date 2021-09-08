import React from 'react';
import PropTypes from 'prop-types';

class SubTitleForm extends React.Component {
  render() {
    const { subtitle, myFunction } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ myFunction }
        />
      </label>
    );
  }
}

SubTitleForm.propTypes = {
  subtitle: PropTypes.string.isRequired,
  myFunction: PropTypes.func.isRequired,
};

export default SubTitleForm;
