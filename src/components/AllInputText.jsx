import React from 'react';
import PropTypes from 'prop-types';

class AllInputText extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, func } = this.props;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título:
          <input
            type="text"
            data-testid="title-input"
            onChange={ func }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo:
          <input
            type="text"
            data-testid="subtitle-input"
            onChange={ func }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem:
          <input
            type="text"
            data-testid="image-input"
            onChange={ func }
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            data-testid="storyline-input"
            onChange={ func }
          />
        </label>
      </div>
    );
  }
}

export default AllInputText;
