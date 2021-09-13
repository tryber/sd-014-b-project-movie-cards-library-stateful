import React from 'react';
import PropTypes from 'prop-types';

class SearchText extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="c">
        <label className="col" htmlFor="searchBar" data-testid="text-input-label">
          Inclui o texto:
          <input
            className="form-control"
            data-testid="text-input"
            type="text"
            name="searchText"
            id="searchBar"
            value={ value }
            onChange={ onChange }
            required
          />
        </label>
      </div>
    );
  }
}

export default SearchText;

SearchText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
