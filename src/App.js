import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집'; // 변수에 데이터 저장하고
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h4>{posts}</h4> {/* 데이터 바인딩 했음 */}
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
