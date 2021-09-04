// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    // const {
    //   searchText,
    //   onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    //   onSelectedGenreChange } = this.props;

    // searchText, uma string
    // onSearchTextChange, uma callback
    // bookmarkedOnly, um boolean
    // onBookmarkedChange, uma callback
    // selectedGenre, uma string
    // onSelectedGenreChange, uma callback

    return (
      <div className={ 0 }>
        <label htmlFor="searchBar">
          {text}
          <input
            className={ 0 }
            name={ 0 }
            id="searchBar"
            type={ 0 }
            value={ 0 }
            onChange={ 0 }
            required
          />
        </label>
      </div>
    );
  }
}

// SearchBar.propTypes = {
//   movie: PropTypes.shape({
//     searchText: PropTypes.string,
//     onSearchTextChange: PropTypes.string,
//     bookmarkedOnly: PropTypes.string,
//     onBookmarkedChange: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     selectedGenre: PropTypes.string,
//     onSelectedGenreChange: PropTypes.string,
//   }).isRequired,
// };

// searchText, uma string
// onSearchTextChange, uma callback
// bookmarkedOnly, um boolean
// onBookmarkedChange, uma callback
// selectedGenre, uma string
// onSelectedGenreChange, uma callback

export default SearchBar;
