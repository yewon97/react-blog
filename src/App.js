import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집'; // 서버에서 가져온 데이터

  let st_1 = { color: 'blue', fontStyle: 'italic' };
  function 함수(x) {
    return x;
  }

  return (
    {
      /* HTML처럼 생겼지만 JSX라는 문법 */
    },
    (
      <div className="App">
        <div className="black-nav">
          <div style={st_1}>개발 Blog</div>
        </div>
        <h4>{함수(100)}</h4>
        <h4>{posts}</h4>
        <img src={logo} alt={logo} />
      </div>
    )
  );
}

export default App;
