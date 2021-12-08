// 이름과 성을 요소로 가진 배열
let arr = ["Hojun", "Lee"]

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;

alert(firstName);
alert(surname);

////////////////

// 이름과 성을 요소로 가진 배열
let arr = [1000, ["Hojun", "Lee"]]

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [계좌잔고, [firstName, surname]] = arr;

console.log(계좌잔고);
console.log(firstName);
console.log(surname);

/////////////////////////

let a = [[1, 2], [3, 4], [5, 6]]

for (let [i, j] of a){
    console.log(i, j);
}

// 에러 핸들링
// try&catch
// 에러가 없는 예시
try {

    alert('try 블록 시작');  // (1) <--
  
    // ...에러가 없습니다.
  
    alert('try 블록 끝');   // (2) <--
  
  } catch(err) {
  
    alert('에러가 없으므로, catch는 무시됩니다.'); // (3)
  
  }

//   에러가 있는 예시
try {

    alert('try 블록 시작');  // (1) <--
  
    lalala; // 에러, 변수가 정의되지 않음!
  
    alert('try 블록 끝(절대 도달하지 않음)');  // (2)
  
  } catch(err) {
  
    alert(`에러가 발생했습니다!`); // (3) <--
  
  }

///////////////////////////////

let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
  alert( user.name ); // 이 코드는 동작하지 않습니다.

} catch (e) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
  alert( "데이터에 에러가 있어 재요청을 시도합니다." );
  console.errer( e );
  alert( e.name );
  alert( e.message );
}
////////////////////////////////
// try…catch…finally
// 잠깐! 에러 핸들링은 여기서 끝이 아닙니다.

// try..catch는 finally라는 코드 절을 하나 더 가질 수 있습니다.

// finally안의 코드는 다음과 같은 상황에서 실행됩니다.

// 에러가 없는 경우: try 실행이 끝난 후
// 에러가 있는 경우: catch 실행이 끝난 후
try {
    ... 코드를 실행 ...
 } catch(e) {
    ... 에러 핸들링 ...
 } finally {
    ... 항상 실행 ...
 }
// 견고한 코드를 짜기위해서, 중간에 에러가 나도 문제가 없이 완수할 수 있게끔 
