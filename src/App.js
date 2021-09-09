// projeto iniciado na turma 13a e finalizado no tempo entre a mudança para a turma 14b. Feito com a consulta de repositórios da turma 13a.
import React from 'react';
import data from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
    </div>
  );
}

export default App;
