// 합계 구하기
// parseInt 로 문자열에서 숫자로 형변환 
let data = '5, 4, 10, 2, 5'.split(',')
let 합계 = 0; 

for (let i of data){
    합계 += parseInt(i);
}
console.log(합계);

// 평균 구하기
let data = '5, 4, 10, 2, 5'.split(',')
let 평균 = 0;

for (let i of data){
    평균 += parseInt(i)/data.length;
}
console.log(평균);

// 평균 구하는 두번쨰 방법, 계산을 덜 하고 가독성이 좀 더 좋다. 
let data = '5, 4, 10, 2, 5'.split(',')
let 합계 = 0;

for (let i of data){
    합계 += parseInt(i);
}
console.log(합계/data.length);


// 실무에선 === 등호 3개를 더 많이 사용한다. 

// 숫자 12345678 의 각 자리 숫자 더하는 방법, 숫자를 문자열로 바꿔준다.
let 합계 = 0;

for(let i of 12345678 + '') {
    합계 += parseInt(i);
}
// 답 36

// array의 각 자릿수 합 구하기 
let data = [11, 22, 33, 111, 2];

data = data + ''
'11, 22, 33, 111, 2'.replace(',','') 
// 위 문은 , 를 하나씩 빼는 과정
'11, 22, 33, 111, 2'.replace(/,/g,'')
// 위 문은 , 한번에 대체하는 과정

data = '11, 22, 33, 111, 2'.replace(/,/g,'')

// 합계 구하기
let data = [11, 22, 33, 111, 2];
let 합계 = 0;
for (let i of data) {
    합계 += parseInt(i);
}
합계 
// 결과 179

let 합계 = 0;
for (let i of data) {
    합계 += +i;
}
합계 
//결과 179

// array 의 자릿 수 모두 더하는 방법 최종 방법
let data = [11, 22, 33, 111, 2];
data = data + ''
data = '11, 22, 33, 111, 2'.replace(/,/g,'')
let 합계 = 0;
for (let i of data) {
    합계 += +i;
}


// 2.연습문제 3 
// 반복문만 사용하여 숫자단위 콤마 찍기
// 반복문만 사용하여 숫자단위 콤마 없애기
// 문자열 뒤집기
// 재현님도 컴마찍기는 검색해서 사용하신다..!

// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';

// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
  reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2){
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ','
    count = 0;
  }
}
console.log(sample);

// 날짜
let d = new Date();
// 밑 시간들은 실시간이 아니라 new Date() 했을 때 시간이다. 
d 
// Wed Dec 01 2021 10:36:19 GMT+0900 (한국 표준시) {}
d.getFullYear()
// 2021
d.getYear()
// 121 getYear은 년도에서 1900을 뺀 값으로 사용하지 않는다. 
d.getMonth()
// 11, 월은 0부터 시작이므로 12월이라 11이 나온다. 
d.getDate()
// 1, 일은 1부터 시작입니다.
d.getDay()
// 3 일요일은 0부터 시작하므로 수요일은 3
d.getHours()
// 10
d.getMinutes()
// 36
d.getSeconds()
// 19


// 호출해서 대체하기
// 배열에선 호출해서 대체할 수 있지만 문자열에선 호출해서 대체해도 바뀌지 않는다. 
let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
let 과일2 = new Array(5);
let 과일3 = new Array('사과', '수박', '복숭아', '딸기', '바나나');
// undefined
과일[0]
'사과'
과일[0] = '한라봉'
'한라봉'
과일
['한라봉', '수박', '복숭아', '딸기', '바나나']

let text = 'abcde'
// undefined
text[0]
'a'
text[0] = 'z'
'z'
text
'abcde'

// 카카오 입사 문제
// 메서드 체이닝 
// '01001' 1은 # 으로 0은 공백으로 변경하는 방법

'01001'.replace(/0/g,' ').replace(/1/g, '#');
// ' #  #'


let 행렬 = [[1,2,3],[4,5,6],[7,8,9]];
undefined
행렬[0]
[1, 2, 3]
행렬[0][0]
1
행렬[0] + 행렬[0]
'1,2,31,2,3'
행렬[0] * 2
NaN
행렬[0] - 행렬[0]
NaN
행렬[0] / 행렬[0]
NaN
행렬[0].toString()
'1,2,3'
행렬[0] + ''
'1,2,3'

// in 과 of 의 차이 
// in : sample 안의 요소 인덱스
// of : sample 안의 요소

// 행렬[0] 인 [1,2,3]에 각각 곱하기 2를 하는 방법 
let sample = [1, 2, 3]
undefined

for (let i in sample) {
    sample[i] *= 2 // sample[i] = sample[i] * 2
}
sample
[2, 4, 6]

// 배열에 영향을 주므로 sample은 이제 
[2, 4, 6]

for (let i of sample) {
    console.log(i)
}
sample
2
4
6
[2, 4, 6]

for (let i in sample) {
    console.log(i)
}
sample
0
1
2
[2, 4, 6]


// 다차원 배열 
// 1반 친구 2명의 평균 점수 구하기 
let 전교점수 = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
  ];
// undefined

// 내가 쓴답 
let sample = [10, 20, 30, 40, 50];
let sample2 = [20, 30, 40, 50, 60];
let 평균1 = 0;
let 평균2 = 0;

for (let i of sample) {
    for (let j of sample2 ) {
        평균1 += parseInt(i)/sample.length;
        평균2 += parseInt(j)/sample2.length;
        총평균 = (평균1 + 평균2) / 2 ;
    }
}
console.log(총평균);
// 175가 나옴;;;;;;; 오답 

// 풀이
// 반복문 안쓰고 배열로 푸는 방법
(전교점수[0][0][0] + 전교점수[0][0][1] + 전교점수[0][0][2] + 전교점수[0][0][3] + 전교점수[0][0][4]) / 5 
// 30
(전교점수[0][1][0] + 전교점수[0][1][1] + 전교점수[0][1][2] + 전교점수[0][1][3] + 전교점수[0][1][4]) / 5 
// 40
(30 + 40) / 2
// 35

// 반복문으로 푸는 방법 
let 총합 = 0;
for (let i =0; i < 5; i++) {
        총합 += 전교점수[0][0][i]
}
console.log(총합)

let 총합2 = 0;
for (let i =0; i < 5; i++) {
        총합2 += 전교점수[0][1][i];
}
console.log(총합2)

        
let 전교점수 = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
  ];

  let 총합 = 0;
for (let i =0; i < 5; i++) {
    for (let ㅓ =0; ㅓ < 5; j++) {
        총합 += 전교점수[0][i][j];
}
}
console.log(총합);


///////////////////////////////오후시간

let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
let 과일선물 = ['체리', '멜론'];

// push는 배열 맨 끝에 추가 
과일.push('레드향')
['사과', '수박', '복숭아', '딸기', '바나나', '레드향']
// unshift는 배열 맨 앞에 추가 
과일.unshift('귤')
7
과일 
['귤', '사과', '수박', '복숭아', '딸기', '바나나', '한라봉']
// pop은 안에 인수 상관없이 제일 끝 요소 삭제 
과일.pop()
['귤', '사과', '수박', '복숭아', '딸기', '바나나']
// shift는 배옆 맨 앞 제거 
과일.shift()
['사과', '수박', '복숭아', '딸기', '바나나']
// 대괄호 없애고 문자열로
과일.toString()
'귤,사과,수박,복숭아,딸기,바나나,한라봉'
// 합치는 기능 조인 
과일.join('!!*')
'귤!!*사과!!*수박!!*복숭아!!*딸기!!*바나나!!*한라봉'
// splice(인덱스, 갯수)
과일.splice(2,3);




// 다시 과일 선언
let 과일 = ['복숭아','딸기','바나나'];
let 제주과일 = ['귤','한라봉','천혜향'];

// concat은 합치는 기능 
과일.concat(제주과일);
['복숭아', '딸기', '바나나', '귤', '한라봉', '천혜향']
제주과일.concat(과일);
['귤', '한라봉', '천혜향', '복숭아', '딸기', '바나나']


let 전화번호 = '010.1000.1000'
// replace 안쓰고 split으로 010-1000-1000 으로 바꾸는 법
전화번호.split('.')
['010', '1000', '1000']
전화번호.split('.').join('-')
'010-1000-1000'


// sort 는 사전식 정렬 
let data = [40, 20, 30, 11, 7, 65];
data.sort();
[11, 20, 30, 40, 65, 7]
// reverse 는 역정렬이 아니라 역순이다.
// reverse 는 뒤집는 것 
let data = [40, 20, 30, 11, 7, 65];
data.reverse();
[65, 7, 11, 30, 20, 40]

data.sort((a, b) => a - b) // 오름차순
(6) [7, 11, 20, 30, 40, 65]
data.sort((a, b) => b - a) // 내림차순
(6) [65, 40, 30, 20, 11, 7]
data.sort(function(a, b){return a-b}) //오름차순
(6) [7, 11, 20, 30, 40, 65]
data.sort(function(a, b){return b-a}) //내림차순
(6) [65, 40, 30, 20, 11, 7]


let person = {
    //key: value
    name: '이호준',
    age: 10,
    height : 30,
    weight : 40,
    이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'}, 10 : 100
  }
// . 닷은 멤버 접근 연산자, 
person.name
이호준
person['name']
'이호준'
// person.['name']
// 에러
person['이력'].첫번째직장
하나
// person.10
// 에러
person[10]
100
person['10']
100

// 함수
function 하나(){
    let x = 10;
    console.log('함수하나 호출');
}
function 함수둘(){
    let y = 10;
    console.log('함수둘 호출');
}
함수하나()
// 함수하나 호출
함수둘()
// 함수둘 호출

let k = 10;
function viewk(){
    console.log(k);
}
function changek(){
     k += 10;
    console.log(k)
}
viewk()
changek()
viewk()


// 위의 k와 밑의 changek 의 k는 다르다.
let k = 10;
function viewk(){
    console.log(k);
}
function changek(){
    let k = 20;
    console.log(k)
}
viewk()
changek()
viewk()
// 10
// 20
// 10

// 캡슐화 , 추상화
function add(a, b) {
    return a + b;
}

add(10, 20);
// 30

// 파라미터
// 아규먼트
// 파리미터 선언, 아규먼트 실행 (파선아실) 

function add(a = 100, b = 200) {
    return a + b;
}

add(10, 20);
// 30출력, 값이 있어도 10,20 을 넣어준게 먼저라서 30이 나온다. 

function add(a = 100, b = 200) {
    return a + b;
}

add();
// 300

add(10);
// 210 

add(undefined, 300);
// 400 -> (100+300) a값은 고정


let hello = function(){
    console.log("Hello");
}

hello()
// Hello

let hi = hello
hi()
// Hello

// 블록 레벨 스코프
if (true) {
    let y = 10;
}
console.log(y);
// 참조에러

let yy = 100
if (true) {
    let yy = 10;
    console.log(yy);
}
console.log(yy);
// 10
// 100

// 함수에서도 블록레벨스코프
function 변수선언(){
    var nn = 1000;
}
변수선언()
console.log(nn);
// 에러

// 기명 함수와 익명 함수
let add10 = function add10(a,b){
    return a + b
}
console.dir(add10)

let add10 = function add20(a,b){
    return a + b
}

// 위에 2개가 기명함수고 (add10과 add20)
// 맨 마지막에 실행한 것이 익명함수. 

// 화살표 함수
let add30 = (a, b) => a + b;

add30(100, 100);
// 200

