import React from 'react';
import PropTypes from 'prop-types';

class TitleMovie extends React.Component {
  render() {
    const { title, handleChange, subtitle } = this.props;
    return (
      <div className="mb-3">
        <label
          className="form-label"
          data-testid="title-input-label"
          htmlFor="title-input"
        >
          Título
        </label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ handleChange }
        />
        <div className="subtitle">
          <label
            className="form-label"
            data-testid="subtitle-input-label"
            htmlFor="subtitle-input"
          >
            Subtítulo
          </label>
          <input
            className="form-control"
            type="text"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </div>
      </div>
    );
  }
}
TitleMovie.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default TitleMovie;
