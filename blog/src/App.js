// import React, [useState] form 'react';
import './App.css';
import { useState } from 'react';

function App() {
  
  // var a,b = [10,100];
  // { color='blue, fontSize:'30px' }
  // let [글제목, 글제목변경]

  let [ 글제목, 글제목변경] = useState ( ['첫번째', '두번째', '세번째'] );
  let [ 타이틀, 타이틀변경] = useState ( ['Blog1', 'Blog2'] )
  let [ 따봉, 따봉변경 ] = useState(0);


  return (  
    <div className="App">
      <div className="black-nav">
        {타이틀[0]}
      </div>
      <button>가나다라마바사</button><br></br>

      <button onClick={()=>{
        let copy = [...글제목];
        // let arr = [1,2,3];
        // array, object특징 담은 변수엔 화살표만 저장됌
        copy[0] = '여자코트추천';
        console.log(copy==글제목);
        글제목변경(copy)
        // 글제목변경( ['네번째', '다섯번째', '여섯번째'] );
        // 글제목변경(???); 기존 state바꿔줌
      }}>
        글수정
      </button>
      <div className="list">
        <h4> { 글제목 [0]} <span onClick={ ()=>{  따봉변경(따봉+1);} }>👍</span>{따봉}</h4>
        <p>02.17</p>
        <hr></hr>
      </div>
      <div className="list">
        <h4> { 글제목 [1]} <span onClick={ ()=>{  따봉변경(따봉+1);} }>👍</span>{따봉}</h4>
        <p>02.17</p>
        <hr></hr>
      </div>
      <div className="list">
        <h4> { 글제목 [2]} <span onClick={ ()=>{  따봉변경(따봉+1);} }>👍</span>{따봉}</h4>
        <p>02.17</p>
        <hr></hr>
      </div>
{/* Component 마음대로사용 */}
      <Modal></Modal> 
     
    </div>
  );
  // 여러가지 태그 불가능
}
function Modal(){ 
  // 이름짓기
  // 1. 이름은 대괄호
  // 2. return()안에 있는 건 하나의 태그로 묶어야함
  // 3. 관리가 편해짐
  // 4. 반복출현하는 HTML덩어리
  // 5. 많이 만들면 단점 : State쓸 때 복잡해짐
  // 6. 상위 Component에서 만든 State쓸면 Props문법 이용해야함
  return(
    //원하는 HTML담고
    <div className="modal">
      <h4> 제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div> 
  )
}

export default App;
