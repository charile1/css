// ES version 
//  ES6 => ES2015 
//  ES7 => ES2016
// ...
//  E12 => ES2021

// Array 생성할 떄 자주 쓰는 repeat 
let s = 'abcde'

s.repeat()
''

s.repeat(2) // 2번 반복하겠다.
'abcdeabcde'

Array.from('a'.repeat(10)) 
//  ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']

let s = 'abcde'
Array.from(s.repeat(10));
// (50) ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e']

Array(10).fill('abc')
(10) ['abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc']

Array(100).fill(0).map((value,index) => value + index)
(100) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]

// 1부터 시작하고 제곱으로 배열 
Array(100).fill(1).map((value,index) => (value + index) ** 2)
(100) [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024, 1089, 1156, 1225, 1296, 1369, 1444, 1521, 1600, 1681, 1764, 1849, 1936, 2025, 2116, 2209, 2304, 2401, 2500, 2601, 2704, 2809, 2916, 3025, 3136, 3249, 3364, 3481, 3600, 3721, 3844, 3969, 4096, 4225, 4356, 4489, 4624, 4761, 4900, 5041, 5184, 5329, 5476, 5625, 5776, 5929, 6084, 6241, 6400, 6561, 6724, 6889, 7056, 7225, 7396, 7569, 7744, 7921, 8100, 8281, 8464, 8649, 8836, 9025, 9216, 9409, 9604, 9801, 10000]

// 1부터 시작하고 제곱으로 배열 의 강사님 정답..
Array(100).fill(0).map((a, b, c) => (b + 1) ** 2)

'.'.split('.')
 ['', '']

'.'.repeat(9).split('.')
['', '', '', '', '', '', '', '', '', '']

2 ** 3 ** 2 //뒤에서부터 계산됨
512

(2 ** 3) ** 2 //뒤에서부터 계산됨
64

Math.pow(2, 3)
8

Math.pow(Math.pow(2, 3),2)
64

let s = 'weniv CEO hojun.lee'

s.split(' ')
['weniv', 'CEO', 'hojun.lee']

s.split('.')
['weniv CEO hojun', 'lee']

s.split(/\s/)
['weniv', 'CEO', 'hojun.lee']

s.split('')
['w', 'e', 'n', 'i', 'v', ' ', 'C', 'E', 'O', ' ', 'h', 'o', 'j', 'u', 'n', '.', 'l', 'e', 'e']



'12367'.split('')
['1', '2', '3', '6', '7']

'12367'.split('').forEach(x => x)
undefined
// forEach는 반환값이 없다. map은 반환값이 있다.

'12367'.split('').map(x => parseInt(x))
[1, 2, 3, 6, 7]

// 메서드 체이닝 
// 문자열을 split 하나씩 쪼개서 배열로 만들어주고, 배열에 map으로 숫자형으로 바꿔주고, 배열에 forEach로 sum에 누적해주는 과정
let sum = 0
'12367'.split('').map(value => parseInt(value)).forEach(value => sum += value)
undefined

sum
19

// '12367'.split('') 하면 ['1', '2', '3', '6', '7'] (반환값이 array)
// '12367'.split('').map(value => parseInt(value)) 하면 [1, 2, 3, 6, 7]
// map은 (value,index,array)의 형태를 가지고 여기선 value가 들어오면 숫자로 변환시키기 위해 parseInt를 사용하였다.
// map은 원본에 반영하고 foreach는 원본에 반영하지 않는다.

// Map의 원리를 볼 수 있는 코드
'12367'.split('').map(value => value + value)
// ['11', '22', '33', '66', '77']

let today = new Date('2021/12/21/12:00')
// undefined

today
Tue Dec 21 2021 12:00:00 GMT+0900 (한국 표준시)

today.toString()
'Tue Dec 21 2021 12:00:00 GMT+0900 (한국 표준시)'

today.toLocaleDateString('ko-KR')
'2021. 12. 21.'

today.toLocaleDateString('en-US')
'12/21/2021'

today.toISOString().slice(0, 4)
'2021'
today.toISOString().slice(5, 7)
'12'
today.toISOString().slice(8, 10)
'21'

today.toISOString().slice(0, 10).split('-')
(3) ['2021', '12', '21']

Math.max()
-Infinity

Math.min()
Infinity

Math.floor(3.4) //버림
3

Math.round(3.4) //반올림/
3 
Math.round(3.5)
4

Math.PI //파이
3.141592653589793

Math.max([1, 2, 4, 6, 7])
NaN
Math.max(...[1, 2, 4, 6, 7])
7

//모던자바스크립트 예제
// reduce는 오래된 문법, 대표님은 아예 사용하지 않으신다.
// 대체로 forEach로 해도 된다.
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current);

console.log(result)
// 15

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum * current);

console.log(result)
// 120

[1, 2, 3, 4, [1, 2, 3]].flat() //평평하게 핀다.
// [1, 2, 3, 4, 1, 2, 3]

[1, 2, 3, 4, [1, 2,[1, 2, 3]]].flat().flat()
// (9) [1, 2, 3, 4, 1, 2, 1, 2, 3]

// / * this */
function sayName(){
  console.log(this.name);
}

var name = 'Hero'; 
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다. 
// 때문에 window.name === "Hero" 가 성립합니다.

let peter = {
  name : 'Peter Parker',
  sayName : sayName
}

let bruce = {
  name : 'Bruce Wayne',
  sayName : sayName
}

sayName(); //Hero
peter.sayName();  //Peter Parker
bruce.sayName(); //Bruce Wayne

/* sayName() 함수를 실행했을 때와 
peter, bruce 객체의 sayName 함수를 호출했을 때의 결과를 비교해 보세요 */

// this 사용 예시
let 호텔 = [{
    '이름' : '하나호텔',
    '위치' : '제주도 제주시 001',
    '가격' : {'A':50000, 'B':30000, 'C':15000},
    '방의개수' : 50,
    '예약자수' : 25,
    '남은방의개수' : function(){return this.방의개수 - this.예약자수}
  },{
    '이름' : '둘호텔',
    '위치' : '제주도 제주시 002',
    '가격' : {'A':100000, 'B':60000, 'C':30000},
    '방의개수' : 100,
    '예약자수' : 30,
    '남은방의개수' : function(){return this.방의개수 - this.예약자수}
  },{
    '이름' : '셋호텔',
    '위치' : '제주도 제주시 003',
    '가격' : {'A':80000, 'B':50000, 'C':30000},
    '방의개수' : 120,
    '예약자수' : 80,
    '남은방의개수' : function(){return this.방의개수 - this.예약자수}
  }];


console.log(호텔[0])
// {이름: '하나호텔', 위치: '제주도 제주시 001', 가격: {…}, 방의개수: 50, 예약자수: 25, …}

호텔[0]['남은방의개수']()
25
호텔[0]['예약자수'] = 49
49
호텔[0]['남은방의개수']()
1

// apply()
var peter = {
    name : 'Peter Parker',
    sayName : function(is, is2){    
          console.log(this.name+ ' is '+ is + ' or ' + is2);
      }
  }
  
  var bruce = {
    name : 'Bruce Wayne',
  }
  
  peter.sayName.apply(bruce, ['batman', 'richman']);
  
  /* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고 
  apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */

// bind()
function sayName(){
    console.log(this.name);
  }
  
  var bruce = {
    name: 'bruce',
    sayName : sayName
  }
  
  var peter = {
    name : 'peter',
    sayName : sayName.bind(bruce)
  }
//bind를 주면 브루스꺼에 속한다. 
// this.name 나를 호출한 객체의 이름 
  peter.sayName();
  bruce.sayName();

//클로저 외우기 
function 제곱(x) {
    function 승수 (y){
        return y ** x
    }
    return 승수
}
// undefined
제곱(2)(10)
// 100

let 제곱2 = 제곱(2)
제곱2(10)
// 100
let 제곱3 = 제곱(3)
제곱3(10)
// 1000

// JSON
// 키값,벨류값 모두 쌍따옴표로 묶인다
// 숫자는 제외
{
    "squadName": "슈퍼히어로",
    "members": [
      {
        "name": "아이언맨",
        "age": 29,
        "본명": "토니 스타크"
      },
      {
        "name": "헐크",
        "age": 39,
        "본명": "부르스 배너"
      }
    ]
  }
