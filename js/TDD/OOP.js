// 객체지향

// 1.모듈 패턴
// 값을 은닉하기위해 모듈 패턴을 사용합니다.
function person() {
    let age = 35; // 클로저 변수 , 함수 안은 지역공간이기 때문에.

    return {
        getAge: function(){ return age },  // 클로져 함수
        setAge: function(data){ age = data } // 클로져 함수
    }
}

const Myperson = person();
console.log(person.getAge()); // 클로저 변수를 밖으로 빼냈습니다.


// 2. 사용자 정의 타입 패턴 
// 자바스크립트의 타입 내장 함수처럼 타입을 마음대로 만들 수 있습니다.
// 함수 안의 this는 미래에 만들 인스턴스를 가르킵니다.(붕어빵)
// 생성자함수는 대문자로 시작합니다. (붕어빵틀)
function PersonType(){
    this.age = 35;  //인스턴스.age = 35; // 은닉된 값이 아닙니다. 어디서든 접근이 가능한 값입니다.
}

PersonType.prototype.getAge = function (){
    return this.age
}

// new 키워드로 this가 인스턴스를 가르키게 만듭니다.
const instancePerson = new PersonType();
// const instancePerson2 = new PersonType(); 이런식으로 새 붕어빵을 만들 수 있습니다.
console.log(instancePerson.age);

// 3. 모듈 + 사용자 정의 타입 
// 인스턴스를 효율적으로 생성도 하고 값도 은닉하고 싶은 경우에 사용합니다.

// function PersonType2() {
//     let age = 25; // 은닉 대상

//     function innerPersonType() { } // 은닉에 접근하기 위해 함수를 선언 

//     innerPersonPType.prototype.getAge = function(){  // 프로토타입 등록 // age에 접근하는 클로져 함수 
//         return age;
//     }

//     return innerPersonType; // 함수 밖으로 빼기
// }

// const Person3 = PersonType2();  // Person3 = innerPersonPType
// const person3 = new Person3();
// console.log(person3.getAge)

// IIFE 패턴으로 만들어보기 (즉시 실행함수)
// const Person3 = PersonType2();  이렇게 하지말고 즉시실행함수로 바로 실행해버리자!

const PersonType3 = (function () {
    let age = 25;

    function innerPersonType() { }

    innerPersonType.prototype.getAge = function () {
        return age;
    }

    return innerPersonType;
})();

const personType3 = new PersonType3();
console.log(personType3.getAge());
