import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  // React.Component 클래스의 기능을 추가한 App 클래스
  // 실제로 React.Component 클래스는 500줄이 넘는 코드로 여러 기능이 구현되어 있음.
  state = {
    isLoading : true,
    movies: [],
  };
  // async와 await는 함께 사용해야함.

  // 점 연산자 적용 순서대로 구조 분해 할당을 적용함
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    // 영화 데이터 로딩!
    this.getMovies();
    
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => {
              
              return <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                      />;
          })}
          </div>
        )} 
      </section>
    );
  }
}

export default App;
