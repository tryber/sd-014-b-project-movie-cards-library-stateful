import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <section>
        <article>
          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            <input
              data-testid="subtitle-input"
              name="subtitle"
              value={ subtitle }
              onChange={ handleChange }
              type="text"
            />
          </label>
        </article>
      </section>
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
