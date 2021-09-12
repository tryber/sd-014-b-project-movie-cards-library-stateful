import React from 'react';
import PropTypes from 'prop-types';

class InputTitle extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <section>
        <article>
          <label htmlFor="title" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input"
              name="title"
              value={ title }
              onChange={ handleChange }
              type="text"
            />
          </label>
        </article>
      </section>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputTitle;
