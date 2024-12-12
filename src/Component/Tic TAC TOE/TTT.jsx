// import React,{useState,useRef} from 'react'
// import './TTT.css';
// import circle from './circle.png'
// import cross from './cross.png'
// let data =["","","","","","","","",""]
// let e;
//  const TTT = () => {
//     let tittleRef;
//     let [count,setCount]=useState(0);
//     let [lock,setLock]=useState(false);
//     let titleRef = useRef(null);
//     let box1=useRef(null);
//     let box2=useRef(null);
//     let box3=useRef(null);
//     let box4=useRef(null);
//     let box5=useRef(null);
//     let box6=useRef(null);
//     let box7=useRef(null);
//     let box8=useRef(null);
//     let box9=useRef(null);
//     let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];   
//  const toggle =(event,num)=>{
// if (lock){
//     return 0;
// }
// if (count%2===0){
//    e.target.innerHTML  =`<img src='${cross}'/>`;
//    data[num]="x";
//    setCount(++count);
// }
// else{
//     e.target.innerHTML  =`<img src='${circle}'/>`;
//    data[num]="o";
//    setCount(++count);  
// }
// checkWin()
//     }
//     const checkWin=()=>{
//        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="") {
// won(data[2]);
//        }
//       else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="") {
//         won(data[5]);
//                }
//              else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="") {
//                 won(data[8]);
//                        }
//                       else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="") {
//                         won(data[6]);
//                                }
//                               else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="") {
//                                 won(data[7]);
//                                        }
//                                        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="") {
//                                         won(data[8]);
//                                                }
//                                                else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="") {
//                                                 won(data[8]);
//                                                        }  
//                                                        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="") {
//                                                         won(data[6]);
//                                                                }                                         
//     }
//     const won = (winner) =>{
//      setLock(true) ;
//        if(winner==='x'){
//       tittleRef.current.innerHTML = `Congratulation <img src=${cross}>`
//        }
    
//        else{
//         tittleRef.current.innerHTML = `Congratulation <img src=${circle}>`
//        }
//     }
//     const reset =() => {
//       setLock (false);
//       data=["","","","","","","","",""];
//       tittleRef.current.innerHTML = `Tic Tac Toe IN <span>React</span>`
//     box_array.map((e)=>{
//         e.current.innerHTML="";
//     }
// )    }
// const boxRefs = [
//     useRef(null), useRef(null), useRef(null),
//     useRef(null), useRef(null), useRef(null),
//     useRef(null), useRef(null), useRef(null)
//   ];
  
//   return (
//    <div className='Container'>
// <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
// <div className="board">
// <div className="row1">
//     <div className="box" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
//     <div className="box" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
//     <div className="box" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
// </div>
// <div className="row2">
//     <div className="box"  ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
//     <div className="box"  ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
//     <div className="box"  ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
// </div>
// <div className="row3">
//     <div className="box"  ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
//     <div className="box"  ref={box8}  onClick={(e)=>{toggle(e,7)}}></div>
//     <div className="box"  ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
// </div>
// </div>
// <button className="reset" onClick={()=>{reset()}}>Reset</button>
//    </div>
//   )
// }
// export default TTT;




import React, { useState, useRef } from 'react';
import './TTT.css';
import circle from './circle.png';
import cross from './cross.png';

let data = ["", "", "", "", "", "", "", "", ""];
let e;

const TTT = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const boxRefs = [
    useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null)
  ];

  const toggle = (event, num) => {
    if (lock) return;

    const currentBox = event.target;
    if (count % 2 === 0) {
      currentBox.innerHTML = `<img src='${cross}' alt="X" />`;
      data[num] = "x";
    } else {
      currentBox.innerHTML = `<img src='${circle}' alt="O" />`;
      data[num] = "o";
    }

    setCount(count + 1);
    checkWin();
  };

  const checkWin = () => {
    // Horizontal
    for (let i = 0; i < 3; i++) {
      if (data[i * 3] && data[i * 3] === data[i * 3 + 1] && data[i * 3 + 1] === data[i * 3 + 2]) {
        won(data[i * 3]);
        return;
      }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
      if (data[i] && data[i] === data[i + 3] && data[i + 3] === data[i + 6]) {
        won(data[i]);
        return;
      }
    }

    // Diagonal
    if (data[0] && data[0] === data[4] && data[4] === data[8]) {
      won(data[0]);
      return;
    }
    if (data[2] && data[2] === data[4] && data[4] === data[6]) {
      won(data[2]);
      return;
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === 'x') {
      titleRef.current.innerHTML = `Congratulations <img src=${cross} alt="X" /> (cross) is  Winner`;
    } else {
      titleRef.current.innerHTML = `Congratulations <img src=${circle} alt="O" /> (circle) is  Winner`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe IN <span>React</span>`;
    boxRefs.forEach((box) => {
      box.current.innerHTML = "";
    });
    setCount(0);
  };

  return (
    <div className='Container'>
      <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="box" ref={boxRefs[0]} onClick={(e) => toggle(e, 0)}></div>
          <div className="box" ref={boxRefs[1]} onClick={(e) => toggle(e, 1)}></div>
          <div className="box" ref={boxRefs[2]} onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="box" ref={boxRefs[3]} onClick={(e) => toggle(e, 3)}></div>
          <div className="box" ref={boxRefs[4]} onClick={(e) => toggle(e, 4)}></div>
          <div className="box" ref={boxRefs[5]} onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="box" ref={boxRefs[6]} onClick={(e) => toggle(e, 6)}></div>
          <div className="box" ref={boxRefs[7]} onClick={(e) => toggle(e, 7)}></div>
          <div className="box" ref={boxRefs[8]} onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default TTT;
