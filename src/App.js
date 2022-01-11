import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // ES6 destructuring 문법 : array, object에 있던 자료를 변수에 쉽게 담고 싶을 때
  // var [a, b] = [10, 100]; -> a변수에 10저장, b변수에 100저장

  // 리액트의 데이터 저장공간 state 만드는 법
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']);
  // state는 1. 변수 대신 쓰이는 데이터 저장공간
  // 2. useState()를 이용해 만들어야함
  // 3. 문자, 숫자, array, object 다 저장가능

  // state에 데이터 저장해놓는 이유 : 웹이 App처럼 동작하게 만들고 싶어서
  // state는 변경되면, HTML이 자동으로 재렌더링이 됨 (변수는 안됨, 새로고침이됨)
  
  // 자주 바뀌는, 중요한 데이터는 변수말고 state로 저장해서 데이터 바인딩 하기!

  let posts = '강남 고기 맛집'; // 변수에 데이터 저장하고
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
