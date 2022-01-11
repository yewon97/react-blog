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
      <Modal />
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <Modal />
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <Modal />

    </div>
  );
}

// 컴포넌트 만들기 - App.js와 나란히 작성하면됨
/* -유의사항-
1. 이름은 대문자
2. return() 안에 있는건 태그 하나로 묶어야함 
3. return() 내부를 묶을 때 의미없는 <div> 쓰기 싫으면 <></> */
function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
  </div>
  );
}

/* 어떤걸 Component로 만드는게 좋을까? 
- 반복출현하는 HTML 덩어리들
- 자주 변경되는 HTML UI들
- 다른 페이지 만들 때도 컴포넌트로 만듦*/

/* Component 많이 만들면 단점
- state 쓸 때 복잡해짐
 (상위 component에서 만든 state 쓰려면 props 문법 이용해야함) */

export default App;
