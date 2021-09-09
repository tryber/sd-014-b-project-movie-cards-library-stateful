import React from 'react';
import PropTypes from 'prop-types';

class SubTitle extends React.Component {
  render() {
    const { subtitle, atualiza } = this.props;
    return (
      <label htmlFor="textSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="textSubtitle"
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ atualiza }
        />
      </label>
    );
  }
}

SubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  atualiza: PropTypes.func.isRequired,
};

export default SubTitle;
