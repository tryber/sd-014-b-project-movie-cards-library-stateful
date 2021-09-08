// implement MovieLibrary component here
// import React, { Component } from 'react';
// import movies from '../data';
// import MovieList from './MovieList';
// import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

// class MovieLibrary extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);

//     this.state = {
//       searchText: '',
//       bookmarkedOnly: false,
//       selectedGenre: '',
//     };
//   }

//   onSearchTextChange = (event) => {
//     this.setState({
//       searchText: event.target.value,
//     });
//   }

//   onBookmarkedChange = (event) => {
//     this.setState({
//     bookmarkedOnly: event.target.checked,
//   });
// }

//   render() {
//     return (
//       <div>
//         <h2> My awesome movie library </h2>
//         <SearchBar />
//         <MovieList movies={ movies } />
//         <AddMovie />
//       </div>
//     );
//   }
// }
// export default MovieLibrary;
