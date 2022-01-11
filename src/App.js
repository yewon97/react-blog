import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // ES6 destructuring 문법 : array, object에 있던 자료를 변수에 쉽게 담고 싶을 때
  // var [a, b] = [10, 100]; -> a변수에 10저장, b변수에 100저장

  // 리액트의 데이터 저장공간 state 만드는 법
  let [글제목, 글제목변경] = useState('남자 코트 추천');

  let posts = '강남 고기 맛집'; // 변수에 데이터 저장하고
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h4>{posts}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
