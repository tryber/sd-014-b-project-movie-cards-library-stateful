import React from 'react';
import PropTypes from 'prop-types';

export default class AddTitle extends React.Component {
  render() {
    const { onChange, title } = this.props;
    return (
      <label htmlFor="title-input" ata-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
