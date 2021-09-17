import React from 'react';
import PropTypes from 'prop-types';

class TitleSubtitle extends React.Component {
  render() {
    const {
      title,
      subtitle,
      addState,
    } = this.props;
    return (
      <section>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            type="text"
            value={ title }
            onChange={ addState }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ addState }
          />
        </label>
      </section>
    );
  }
}

TitleSubtitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  addState: PropTypes.func.isRequired,
};

export default TitleSubtitle;
