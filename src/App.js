import './App.css';

// 1
const numberArray1 = [1,2,3,4,5,6,7,8,9,10];
const numArray1Anser = numberArray1.filter(number1 => number1 % 2 === 0);
console.log(numArray1Anser);

// 2
const numberArray2 = [1,2,3,4,5,6,7,8,9,10];
// const numArray2Anser = numberArray2.splice((number2 => number2 >= 3));
const numArray2Anser = numberArray2.splice(2, 8);
console.log(numArray2Anser);


//3
let numberArray3 = [1,2,3,4,5,6,7,8,9,10];
const a = (arr) => {
  if( arr.length === 0 ) return 0;
  return numberArray3 [ numberArray3.length -1 ];
} 
console.log(a(""));
console.log(a("가"));

// const numVal =  a === "";
// const b =["0"];
// const c = numberArray3 [ numberArray3.length -1 ];
//   numberArray3 = numVal? b:c;

// const a = (arr) => {
//   if(arr.length === 0) return 0;
//   return arr[arr.length-1];
// }

//4
// let numberArray4 = [1,2,3,4,5,6,7,8,9,10];
// numberArray4.map();





function App() {
  return (
    <div className="App">
      <ul>
        <h2>
          const numberArray = [1,2,3,4,5,6,7,8,9,10];
        </h2>
        <li>
          //문제1. 짝수만 담긴 배열을 만들어보세요.
        </li>
        <li>
          //문제2. 1,2가 삭제된 배열을 만들어보세요.
        </li>
        <li>
          //문제3. 인수값에 빈배열을 넣으면 0을 리턴하고 빈배열이 아닌 요소를 넣으면 배열의 맨 마지막 요소를 리턴하는 함수를 만드세요.
        </li>
        <li>
          //문제4. numberArray 배열을 순회해서 
          배열요소가 
          key이고 ㅡ 배열요소 = key
          value는 배열원소 숫자의 영어 문자값을 갖는 객체를ㅡ value = 배열원소숫자의 영어문자값..?
          리턴하는 함수를 만드세요.
          <br>
          {/* //ex) {1:'one', 2:'two'…} */}
          </br>
        </li>
      </ul>


    </div>
  );
}

export default App;
