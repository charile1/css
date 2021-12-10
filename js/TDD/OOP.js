// 객체지향

// 1.모듈 패턴
function Person() {
    let age = 35;

    return {
        getAge: function(){ return age },
        setAge: function(data){ age = data }
    }
}

const person = Person();
console.log(person.getAge());


// 2. 사용자 정의 타입 패턴 
// 자바스크립트의 타입 내장 함수처럼 타입을 마음대로 만들 수 있습니다.
// 함수 안의 this는 미래에 만들 인스턴스를 가르킨다.
function PersonType(){
    this.age = 35;
}

PersonType.prototype.getAge = function (){
    return this.age
}

const instancePerson = new PersonType();
console.log(instancePerson.age);



