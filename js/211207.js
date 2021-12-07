// 프로퍼티 플래그와 설명자

let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

  descriptor
//   {value: 'John', writable: true, enumerable: true, configurable: true}

///////////////////// writable: false 인 경우 
let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false
  });
  
  user.name = "Pete";
// 'Pete'

user.name
'John'

///////////////////////////////////////////////
let user = { };

Object.defineProperty(user, "name", {
  value: "John",
  // defineProperty를 사용해 새로운 프로퍼티를 만들 땐, 어떤 플래그를 true로 할지 명시해주어야 합니다.
  enumerable: true,
  configurable: true
});

alert(user.name); // John
user.name = "Pete"; 
'Pete'
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
undefined
descriptor
{value: 'John', writable: false, enumerable: true, configurable: true}

/////////////////////// enumerable 플래그
// 순회를 가능하게 한다
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

//커스텀 toString은 for...in을 사용해 열거할 수 있습니다.
for (let key in user) alert(key); // name, toString

// getter는 프로퍼티 값을 얻어 내기 위해서 
// setter은 값을 설정하기 위해서
// 면접 문제로 가볍게 내 볼만 하다.
let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} !!! ${this.surname}`;
    }
  };
  
  console.log(user.fullName);
// John !!! Smith


let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullNameSet(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // 주어진 값을 사용해 set fullName이 실행됩니다.
  user.fullNameSet = "hojun lee";
  
  console.log(user.name); // hojun
  console.log(user.surname); // lee


_name 
// 언더바 변수명은 수정이 가능하지만 암묵적으로 건드리지말자는 약속.
// 실제로 변경이 안되는 변수는 # 이 붙는다.

// 프로토타입이 뭐냐.. 프로토타입은 유전자 
// 면접 나올 수 있다..

__proto__ // 구식 용어

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal;
//   {eats: true}eats: true[[Prototype]]: Object
  rabbit
//   {jumps: true}
  rabbit.eats
//   true

// __proto__는 prototype에 접근하는 방식이다.
///////////////
let animal = {
    eats: true,
    walk() {
      alert("동물이 걷습니다.");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
  rabbit.walk(); // 동물이 걷습니다.

//  rabbit에 walk는 없다. 타고 올라가야 rabbit.walk가 된다.
  rabbit
// {jumps: true}

//////////
// 네이티브 프로토타입
let obj = {};

// 오브젝트의 부모  === 오브젝트의 프로토타입 : 트루
alert(obj.__proto__ === Object.prototype); // true

// 메서드가 거기 속해있는 메서드인가
alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true



let arr = [1, 2, 3];

// arr은 Array.prototype을 상속받았나요?
alert( arr.__proto__ === Array.prototype ); // true

// arr은 Object.prototype을 상속받았나요?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// 체인 맨 위엔 null이 있습니다.
alert( arr.__proto__.__proto__.__proto__ ); // nul

// prototype : 유전자 (상속 받은 객체)
//  __proto__ 는 [prototype]에 접근하기 위한 방법
//  __proto__는 비표준으로 시작했으나 지금은 표준의 부록에 실렸다.

function 사람(이름, 나이){
    this.이름 = 이름;
    this.나이 = 나이;
}

let 호준 = new 사람('호준', 10);
let 재현 = new 사람('재현', 5);

> 사람
// ƒ 사람(이름, 나이){
//     this.이름 = 이름;
//     this.나이 = 나이;
// }
> 사람.prototype
// {constructor: ƒ}
// constructor: ƒ 사람(이름, 나이)
// [[Prototype]]: Object

> 호준
// 사람 {이름: '호준', 나이: 10}
> 사람.prototype.수명 = 100;
// 100
> 호준
// 사람 {이름: '호준', 나이: 10}나이: 10이름: "호준"[[Prototype]]: Object수명: 100constructor: ƒ 사람(이름, 나이)[[Prototype]]: Object
> 호준.수명
// 100

> let x = new Array(1, 2, 3, 4);
// undefined
> x
// (4) [1, 2, 3, 4]
> Array.prototype.수명 = 100;
// 100
x.수명
// 100
> Array.prototype.인사 = function 
(){
    console.log("hello world");
}
// ƒ (){
//     console.log("hello world");
// }
> x.인사
// ƒ (){
//     console.log("hello world");
// }

//////////////////////////////////////////클래스//////////
// 클래스는 붕어빵 찍어내는 공장! 붕어빵틀!
// 인스턴스는 찍혀 나오는 생산품 ! 붕어빵! 상품! 

class MyClass {
    // 여러 변수 선언 가능 (let,var 안씀)
    x = 10;
    y = 20;
    // 여러 메서드를 정의할 수 있음
    // , 콤마가 존재하지 않는다.
    constructor() { ... }
    method1() { ... }
    method2() { ... }
    method3() { ... }
    ...
  }

  class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  // 사용법:
  let user = new User("John");
  user.sayHi();


  class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // 클래스는 함수입니다.
  alert(typeof User); // function
  
  // 정확히는 생성자 메서드와 동일합니다.
  alert(User === User.prototype.constructor); // true
  
  // 클래스 내부에서 정의한 메서드는 User.prototype에 저장됩니다.
  alert(User.prototype.sayHi); // alert(this.name);
  
  // 현재 프로토타입에는 메서드가 두 개입니다.
  alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// 클래스는 구식 브라우저에선 폴리필(바벨)이 필요할 수 있다.

/////
class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name}가 멈췄습니다.`);
    }
  
  }
  
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name}가 숨었습니다!`);
    }
  
    stop() {
      super.stop(); // 부모 클래스의 stop을 호출해 멈추고,
      this.hide(); // 숨습니다.
    }
  }
  
  let rabbit = new Rabbit("흰 토끼");
  
  rabbit.run(5); // 흰 토끼가 속도 5로 달립니다.
  rabbit.stop(); // 흰 토끼가 멈췄습니다. 흰 토끼가 숨었습니다!s

//////
  class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

// 커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);

// 물 추가
coffeeMachine.waterAmount = -10; // Error: 물의 양은 음수가 될 수 없습니다.


/////
class CoffeeMachine {
    #waterLimit = 200;
  
    #checkWater(value) {
      if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
      if (value > this.#waterLimit) throw new Error("물이 용량을 초과합니다.");
    }
  
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // 클래스 외부에서 private에 접근할 수 없음
  coffeeMachine.#checkWater(); // Error
  coffeeMachine.#waterLimit = 1000; // Error

////////////
  class CoffeeMachine {

    #waterAmount = 0;
  
    get waterAmount() {
      return this.#waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
      this.#waterAmount = value;
    }
  }
  
  let machine = new CoffeeMachine();
  
  machine.waterAmount = 100;
  alert(machine.#waterAmount);
//   Uncaught SyntaxError: Private field '#waterAmount' must be declared in an enclosing class