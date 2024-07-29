/**
 * This
 * 
 * JS : Lexical Scope를 사용하기 때문에 함수의 상위 스코프가
 * 정의 시점에 평가된다.
 * 
 * 
 * ** this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다. **
 */

const testFunction = function(){
    return this;
}

// console.log(testFunction());
// console.log(testFunction() === global);
// global 오브젝트라는걸 증명하기 위해

const yuJin = {
    name: '유진',
    yaer: 2003,
    sayHello:function(){
        return `안녕하세요 저는 ${this.name}입니다`;
    },
}

console.log(yuJin.sayHello());

function Person(name, year){
    this.name = name;
    this.yaer = year;

    this.sayHello = function(){
        return `안녕하세요 저는 ${this.name}입니다`;
    }
}

const yuJin2 = new Person('안유진',2003);
console.log(yuJin2.sayHello());

Person.prototype.dance = function(){
    function dance2(){
        return `${this.name}이 춤을 춘다`;
    }

    return dance2();
}
/**
 * 가장 상위 레벨에 함수를 선언하면 
 * this가 자동으로 실행하는 대상 객체로 맵핑이 되지만
 * 그 외의 위치에다 함수를 선언하게 되면 함수의 this는
 * global 오브젝트에 맵핑이 된다.
 */

console.log(yuJin2.dance());

/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면된다.
 * 
 * 1) 일반 함수 호출할땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을땐 객체를 가리킨다.
 */

console.log('---------------');

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName(){
    return this.name;
}

console.log(returnName());

const yuJin3 = {
    name: '안유진',
}

console.log(returnName.call(yuJin3));
console.log(returnName.apply(yuJin3));

console.log('---------------');

/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply ->  아규먼트를 리스트로 입력해야한다.
 * 
 * => 실행을 하는 순간에 바로 함수가 실행이 된다.
 */

function multiply(x, y, z) {
    
    return `${this.name} / 결과값: ${x * y * z}`
}

console.log(multiply.call(yuJin3, 3, 4, 5));
console.log(multiply.apply(yuJin3, [4, 5, 6]));

/**
 * bind()
 * 
 * => Bind를 한 다음에 바로 함수가 실행되지 않는다.
 * Bind가 된 함수를 반환을 해준다
 */

const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());