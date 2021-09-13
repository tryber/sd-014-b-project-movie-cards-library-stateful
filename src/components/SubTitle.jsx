import React from 'react';
import PropTypes from 'prop-types';

class SubTitle extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <section className="col">
        <label
          className="mb-3"
          htmlFor="subtitle-input"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            className="form-control"
            data-testid="subtitle-input"
            type="text"
            id="subtitle-input"
            name="subtitle"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

SubTitle.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SubTitle;
