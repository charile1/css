// 재귀함수 호출 과정 (외워야함)
function factorial(n){
    if(n <= 1) {
        return n
    }
    return n * factorial(n-1)
}

// factorial(5) == 5 * factorial(4) == 5 * 24
// factorial(4) == 4 * factorial(3) == 4 * 6
// factorial(3) == 3 * factorial(2) == 3 * 2
// factorial(2) == 2 * factorial(1) == 2 * 1
// factorial(1) == 1
// 결과 120 

//  외워야하는 코드 
function sigma(n){
    if(n <= 1) {
        return n
    }
    return n + sigma(n-1)
}

// sigma(5) == 5 + sigma(4) == 5 + 10
// sigma(4) == 4 + sigma(3) == 4 + 6
// sigma(3) == 3 + sigma(2) == 3 + 3
// sigma(2) == 2 + sigma(1) == 2 + 1 
// sigma(1) == 1 

// 재귀함수로 문자열 뒤집기 (외워야함)
// text에 어떤 형태가 들어올지 모르므로 문자열로 형변환 
function reverse(text) {
    text += ''
    if(text.length <= 1) {
        return text
    }
    return reverse(text.slice(1)) + text[0]
}

// reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
// reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
// reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
// reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
// reverse('o') == 'o'
// olleh


// 피보나치 수열 (외워야함)
//  1, 1, 2, 3, 5, 8 ,13, 21 
//  앞에 값 두개 더해서 뒷 값 나오는 것 반복 
function fib(n){
    if(n <= 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}
// 왼쪽 function만 따라갔으니
// fib(5) == fib(4) + fib(3) == 5 + 3 == 8
// fib(4) == fib(3) + fib(2) == 5 
// fib(3) == fib(2) + fib(1) == 3
// fib(2) == 2
// fib(1) == 1

// 오른쪽 값인 fib(2)를 다시해야 하는 상황!
// fib(2) == 2 

// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
// fibo_cache에 계산한 값을 저장. 
let fibo_cache = []
function fibo(n){
  if (n in fibo_cache) {
    return fibo_cache[n]
  }
  fibo_cache[n] = n < 2 ? n : fibo(n-2) + fibo(n-1)
  return fibo_cache[n]
}

// 재귀함수로 콤마 찍는 법 
function comma (text) {
    text += ''
}

// 익명 즉시 실행 함수
(function () {
    var a = 1;
    var b = 2;
    return a + b;
  }());

// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
  }());
  
  foo(); // ReferenceError: foo is not defined
  // 어차피 실행하지 못해서 의미가 없음.
  // 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리

// map
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// mdn 예제
let array = [1, 4, 9, 16];
let 값1 = array.map(x => x * 2);

// map
let array = [1, 4, 9, 16];
let 값1 = array.map(x => x * 2);

// array 안에 object , 프로퍼티 골라서 뺴기 
let data = [{
                반 : 1, 
                번 : 1,
                이름 : "호준",
                중간고사점수 : 55
            },{
                반 : 1, 
                번 : 2,
                이름 : "길동",
                중간고사점수 : 60
            },{
                반 : 1, 
                번 : 3,
                이름 : "철수",
                중간고사점수 : 20
            },{
                반 : 1, 
                번 : 4,
                이름 : "규리",
                중간고사점수 : 100
            },{
                반 : 1, 
                번 : 5,
                이름 : "호준",
                중간고사점수 : 30
            }]

console.log(data.map(x => x.중간고사점수))
// [55, 60, 20, 100, 30]
console.log(data.map(x => [x.이름,x.중간고사점수]))
// 0: (2) ['호준', 55]
// 1: (2) ['길동', 60]
// 2: (2) ['철수', 20]
// 3: (2) ['규리', 100]
// 4: (2) ['호준', 30]
console.log(data.map(x => [x.중간고사점수/5]))

// 중간고사점수 합계구하는법
// y => s+=y가 콜백함수입니다.
let s = 0;
data.map(x => x.중간고사점수).forEach(y => s+= y )


let array = [1, 2, 3, 4]
let result = []
function 제곱(x) {
    return x ** 2
}

array.forEach(x => result.push(x**2));
undefined
result
//  [1, 4, 9, 16]

// 2차원
let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
undefined
let newData = data.map(a => a.map(n => n *2));


// filter 로 거르기
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

// filter로 5를 초과하는 숫자만 나오게 하기 
let x = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9];
const result = x.filter(x => x > 5);
console.log(result);

// 
let 회원정보 = [{
    아이디 : 'jjang',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun1@gmail.com',
    가입연도 : '2020-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang2',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun2@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang3',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun3@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang4',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun4@gmail.com',
    가입연도 : '2020-12-02',
    주접속위치 : '125.242.161.149'
}];


// 1번 남자인 사람
회원정보.filter(el => el.성별 === '남');

// 2번 남자이면서 2021년도에 가입하신 분
// 2.1 split 
회원정보.filter(el => el.성별 === '남' && el.가입연도.split('-')[0] === '2021');

// 2.2 slice 
회원정보.filter(el => el.성별 === '남' && el.가입연도.slice(0, 4) === '2021');

// 3번 아이디가 jjang인 사람을 찾아주세요.
회원정보.find(user => user.아이디 === 'jjang');

// 글이 100개
// 25개는 일상
// 50개는 개발관련 글
// 25개는 취미
let blogs = [{
id : 1,
title : 'title1',
content : 'content1',
section : '일상'
}, {
id : 2,
title : 'title2',
content : 'content2',
section : '취미'
}, {
id : 3,
title : 'title3',
content : 'content3',
section : '개발'
}, {
id : 4,
title : 'title4',
content : 'content4',
section : '개발'
}];

let s = '개발';
let data = s? blogs.filter(b => b.section === s) : blogs;

let a = '일상'
let 일상 = a ? blogs.filter(z => z.section === a) : blogs;

///////////////////////////////

// Map 생성 
let m = new Map();

// Map에 값을 넣기 
m.set('하나','one');
m.set('둘','two');
m.set('셋','three');
// Map의 값에 접근하기
m.get('하나')
m.get('둘')
m.keys(0)
m.values()
// Map에 값이 있는지 확인하기 
console.log(m.has('하나'));

// 길이
m.size

//Map 순환(for-of문)
let m = new Map();

m.set('하나','one');
m.set('둘','two');
m.set('셋','three');

for (let i of m) {
    console.log(`순환 중 ${i[0]}`)
}
// 순환 중 하나
// 순환 중 둘
// 순환 중 셋
undefined
for (let i of m) {
    console.log(`순환 중 ${i[1]}`)
}
// 순환 중 one
// 순환 중 two
// 순환 중 three

// Set - 중복을 허락하지 않는다!, 순서가 없다.
let s = new Set('abcdeeeeeeeee');
console.log(s);

s.add('f');
s.delete('b')
s.has('c')
s.size

s.forEach(i => console.log(i))
// a
// b
// c
// d
// e

let a = new Set('abc');
let b = new Set('def');

[...a].filter(value => b.has(value))