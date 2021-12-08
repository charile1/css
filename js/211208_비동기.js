// 콜백함수
const 버튼 = document.querySelector('.button');
버튼.addEventListener('click', function(){});

// 버튼.addEventListener('click', '다른 곳에서 짠 함수이름'); // ex('click', helloworld100)
// 버튼.addEventListener('click', ()=>{});
// // function helloworld100() {
//     console.log('hello world');
//     console.log('hello world');
// }

/////////////////Promise
// 비동기 , 기약 없는 약속이 프로미스!!!(몇초걸릴지모름)
// 콜백 지옥을 탈출할 수 있게 만들어주는 것이 promise
// 성공과 실패만 하고 중립은 없다.
let p = new Promise(function(resolve, reject) {
    // 실행코드
});
  
// resolve(value) — 작업이 성공적으로 마무리되면 호출, 결과는 value에 담김
// reject(error) — 작업이 실패시 호출, error는 error에 담김 , catch로 이동
// catch - 에러를 잡아주는 녀석
// finally - 무조건 실행

try {
    ... 코드를 실행 ...
 } catch(e) {
    ... 에러 핸들링 ...
 } finally {
    ... 항상 실행 ...
 }

//  모던자바스크립트 예제 (살짝 수정)
let promise = new Promise(function(resolve, reject) {
// 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

// 10초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
// 1000 이면 1초 10000이면 10초 (밀리세컨드)
setTimeout(() => resolve("이제야 끝남!"), 10000);
});
console.log('hello world');
console.log(promise);
// undefined
> promise
// Promise {<pending>}
> promise
// Promise {<pending>}
> promise
// Promise {<pending>}
> promise
// Promise {<pending>}
> promise
// Promise {<pending>}
> promise
// Promise {<pending>}
> promise
// Promise {<pending>}
> promise
// Promise {<fulfilled>: '이제야 끝남!'}
// 10초가 지나서 끝난거임 , 비동기 

// 준홍님이 만든 좋은 예제
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("끝남!"), 3000);       //세탁기 돌린 상태
  });
  
console.log('hello world');
promise.then(v => console.log(v));
console.log('hello world2');
  
// hello world
// hello world2
// 끝남!
// 끝남이 중간에 안들어가고 3초뒤에 나오므로 마지막에 나옴.(비동기)

// 동기는 순차적 실행 , 세탁기 돌리는 동안 아무것도 안하는 것
// 비동기는 순서대로가 아닌 상황에 맞게, 따로 빼서 실행이 가능한. 세탁기 눌러놓고 다른 집안일 하는 것
// 비동기가 필요한 이유 : 서버와의 응답할 때 비동기적으로 해야하니까.. 동기적이면 문제가 생김 

new Promise((resolve, reject) => {...code...})
  .then(...code...)
  .then(...code...)
  .finally(...code...)
  .catch(...code...); // <-- .catch에서 에러 객체를 다룰 수 있음


////////////
new Promise(function(resolve, reject) {

setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

alert(result); // 1
return result * 2;

}).then(function(result) { // (***)

alert(result); // 2
return result * 2;

}).then(function(result) {

alert(result); // 4
return result * 2;

});

// 모던자바스크립트 예제 (살짝 수정)
//  reject니까 catch로 이동
new Promise(function(resolve, reject) {

    setTimeout(() => reject('error'), 1000);
  
  }).then(function(result) { 
  
    alert(result + ' : 잘 수행!');
    return result + 'one';
  
  }).catch(function(result) { 
  
    alert(result + ' : 애러 발생!'); // error : 애러 발생!
    return result + 'two';
  
  }).then(function(result) {
  
    alert(result + ' : 잘 수행!'); // errortwo : 잘 수행!
    return result + 'three';
  
  });

// 손코딩 1번 
// 1차 접종 퍼센트를 구해주세요!
fetch('https://블라블라.json')
.then(function(response) {
    console.log(1);
    return response.json();
})
.then(function(json) {
    console.log(2);
    console.log(json);
    return json
})
.then(function(json) {
    console.log(3);
    console.log(json.filter(s => s['시·도별(1)'] === '전국').map(obj => obj['1차 접종 퍼센트']));
    return
})

// 손코딩 2번 

new Promise(function(resolve, reject) {

  setTimeout(() => reject('error'), 1000);

}).then(function(result) {

  alert(result + ' : 잘 수행!');
  return result + 'one';

}).catch(function(result) {

  alert(result + ' : 애러 발생!'); // 1 error : 애러 발생!
  return result + 'two';

}).then(function(result) {

  alert(result + ' : 잘 수행!'); // 2 errortwo : 잘 수행!
  return result + 'three';

});

////////////
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        console.log(response);
        console.dir(response);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
    .then(function(json) {
        console.log(3);
        console.log(json.filter(s => s['시·도별(1)'] === '전국').map(obj => obj['1차 접종 퍼센트']));
        return
    });

////////////
// 모던 자바스크립트 예제
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
}

f();


// 1 2 3 4 5 를 순서대로 스택에 넣는다 .
// 2 1 3 4 5 성공(1넣고 2넣고 2빼고 1빼고 3넣다빼고 4넣다빼고 5넣다빼고)
//  5 4 3 2 1 성공
//  3 2 4 1 5 성공
//  3 2 1 4 5 성공 
//  3 2 5 1 4 실패 (5를 넣을 방법이 )

function one(){ two(); }
function two(){ three(); }
function three(){ console.log('end'); }
one() // end
