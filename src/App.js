// react에 있는 내장 함수를 가져다가 쓰겠습니다!
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useState('남자 코트 추천'); // -> [a, b] 형식으로 출력
  // a -> '남자 코트 추천'
  // b -> '남자 코트 추천' state를 정정해주는 함수

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
