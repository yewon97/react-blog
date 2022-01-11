/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  function 제목바꾸기() {
    // var newArray = 글제목; -> 안됨, 복사가 아니라 값 공유임 (reference data type)
    // deep copy 해야함, 객체는 중괄호 써서 하면됨
    var newArray = [...글제목];
    const reverse = newArray.reverse()
    글제목변경(reverse);
  }

  /* <Array, Object state 데이터 수정 방법
  - 일단 변경함수 사용해야함
  - 변경함수(데체할 데이터)
  - state는 직접 건들면 안됨 > deep copy해서 그걸 건들려야함 */
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className="list">
        <h4>{글제목[0]} <span onClick={ () => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
