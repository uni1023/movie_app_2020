import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


// Movie 컴포넌트는 state가 필요없으므로 클래스형 컴포넌트가 아니라 함수형 컴포넌트로 작성할거야.


function Movie({ title, year, summary, poster }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">
                  {title}
                </h3>
              <h5 class="movie__year">{year}</h5>
              <p class="movie__summary">{summary}</p>
            </div>
        </div>
    );        
}

Movie.propTypes = { // propTypes -> Movie에 넘어와야 하는 영화 데이터를 정의하고 관리하기 위해 사용함.
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, // 이미지 주소값 (string)이 저장될것임.
    }; 

export default Movie;