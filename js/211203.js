// this
function aboutThis(){
    console.log(this)
}

aboutThis();
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// this를 선언안했지만 함수 안에 살고 있는 포인터라고 생각하자! 
// 이 함수를 실행시켰더니 윈도우가 찍힌다. 우리의 전역공간의 최상위 객체가 윈도우라서 그렇다.
// this는 함수를 호출하는 객체를 가르킨다.

let myObj = {
    val1 : 100,
    func1 : function() { console.log(this)}
}
myObj.func1();
// {val1: 100, func1: ƒ}가 출력
// this는 함수를 호출한 객체를 가르키니까 myObj인 {val1: 100, func1: ƒ}가 나온것. 

// 전역, 함수스코프
var maVal = 'hhohoho' //전역
console.log(myVal2);

function myFunc(){

    var myVal2 = 'hehehe'; //블록 내에서의 범위만 가진다.
}
// Uncaught ReferenceError: myVal2 is not defined
// myVal2는 함수 내에서 선언되었기때문에 정의되지 않았다고 뜨는 것. 

// 클로져 폐쇄
// val1은 저 안에서만 유효하니까 저 블록 안의 공간을 클로져 라고 한다. 폐쇄된 공간인 것. 
// val1은 함수 내에서만 접근가능하다. 이걸 빼내는게 return
function myFunction(){

    var val1 = "hello";
// 인데 여기서 리턴값을 주면

function myFunction(){

    var val1 = "hello"; // 폐쇄된 공간에 접근하기 위해서 
}

    return {getVal1: function(){return val1}}     // 객체를 리턴해서 값을 빼낸다. 
}
// myFunction 함수에서 return으로 객체를 반환하는데 ,
// 그 객체에는 getVal1이란 키(함수명)에 연결된 함수가 있다. 그 함수는 또 return 값을 val1을 반환한다.
// key의 getVal1은 함수명이 된다. 

myFunction();

// ƒ myFunction(){
//     var val1 = "hello";
//     return {getVal1: function(){}}     
// }

let result = myFunction();
undefined

result
{getVal1: ƒ}

result.getVal1()
'hello'
//클로져: 테크닉, 폐쇄된 공간의 데이터에 접근하기위한 함수
// 함수

/////////////////////////////////////////
Math.random(); // 0 이상 1미만 
0.009835237989924472

Math.random()*10; // 1 이상 10 미만 
4.99020667264057

//floor은 실수를 내림하여 정수를 만드는 메서드 
Math.floor(Math.random()*10); // 10보다 작은 숫자만 나온다. ( 0 ~ 9 )
9

Math.floor(Math.random()*5); // 0 ~ 4의 범위 5미만의 숫자만 나온다. 
4

Math.floor(Math.random()*5+2); // 2 ~ 6의 범위 


function randonNum(){
    return Math.floor(Math.random()*5+2);
}

function randonNum(min, max){
    return Math.floor(Math.random()*max+min); // 5를 곱하면 0~5, 2를 더하면 2~7 숫자를 더하면 시작하는 숫자를 정할수 있었으니까 
}
randonNum(3, 7); //3

function randonNum(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
randonNum(1, 46); //로또는 45까지니까 최댓값 46으로 


////////////////////////////////////////////////////
// DOM
// 해당하는 Id를 가진 요소에 접근하기
document.getElementById()

// 해당 하는 모든 요소에 접근하기 
document.getElementsByName()

// 해당하는 클래스를 가진 모든 요소에 접근하기 
document.getElementsByClassName()




