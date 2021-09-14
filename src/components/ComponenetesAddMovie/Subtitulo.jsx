import React from 'react';
import PropTypes from 'prop-types';

class SubTitle extends React.Component {
  render() {
    const { subtitle, func } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ func }
        />
      </label>
    );
  }
}

SubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default SubTitle;
