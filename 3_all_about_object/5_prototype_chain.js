/**
 * Prototype
 * 
 * 240722.md
 */

const testObj = {};

/**
 * __proto__ : 모든 객체에 존재하는 프로퍼티 (_ _ proto _ _)
 * class 강의에서 배울 때 상속에서 부모 클래스에 해당되는 값.
 * 
 * class 또한 Object로 인스턴스화 되기 때문에 
 *      일반 Object에서도 실행을 할 수 있다.
 */
console.log(testObj.__proto__);

function IdolModel(name, yaer){
    this.name = name;
    this.yaer = yaer;
}

console.log(IdolModel.prototype);   // 값이 감춰져있음

console.dir(IdolModel.prototype, {  
    showHidden: true,               // 감춰진 값 보기
});

// circular reference : 서로가 서로를 참조하고 있는 상태
// 감춰진 값이 맞는지 확인하는 방법
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel('유진', 2003);
console.log(yuJin.__proto__);   // 실제 객체 존재
console.log(yuJin.__proto__ === IdolModel.prototype);
// __proto__ : 부모 클래스와 같은 격, 부모 클래스가 IdolModel.prototype이 나온다.

console.log(testObj.__proto__ === Object.prototype);
// testObj는 아무것도 없는 객체인데 자동으로 Object.prototype이 들어간다.

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);
// IdolModel 의 prototype은 최상위객체가 Object.prototype이 된다.

console.log(yuJin.toString());
// 실행을 했을 때 에러가 나지 않는다는 것은
//      yuJin이라는 객체에 toString()이라는 함수가 존재한다 라는 것을 알 수 있다.
// 하지만 yuJin이라는 객체에 toString()을 정의 한 적이 없다.

// toString()은 어디서 왔을까?
console.log(Object.prototype.toString())
// object.prototype에 toString()이라는 함수가 존재한다.


// 유용한 부분
function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `${this.name}이 인사를 한다.`
    }
}

const yuJin2 = new IdolModel2('유진', 2003);
const wonYoung2 = new IdolModel2('원영',2004);
console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());

console.log(yuJin2.sayHello === wonYoung2.sayHello);
// 같은 기능의 sayHello지만 메모리 공간에서는 다른 공간을 차지한다.
// yuJin2와 wonYoung2는 각각의 고유값을 가진다(name, year)

// hasOwnproperty() : 상속을 받는 프로터지인지 아니면 고유로 갖고있던 프로퍼티인지 확인 가능
console.log(yuJin2.hasOwnProperty('sayHello'));
// T : 고유 프로퍼티 이다.


// 공유가 되었으면 좋겠다.
function IdolModel3(name, year){
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function(){
    return `${this.name}이 인사를 한다.`;
}

const yuJin3 = new IdolModel3('유진', 2003);
const wonYoung3 = new IdolModel3('원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello);
// 한 공간에만 sayHello 라는 함수가 저장이 되어 있다.
// IdolModel3.prototype에 sayHello가 저장이 되어있고 각 객체별로 생성을 따로 하지 않았기 때문

console.log(yuJin3.hasOwnProperty('sayHello'));
// F : 상속받은 프로퍼티


// static 키워드를 사용한 값은 어떻게 선언?
IdolModel3.sayStaticHello = function(){
    return 'static method.';
}
console.log(IdolModel3.sayStaticHello());


/**
 * Overriding
 */
console.log('---------Overriding-----------');

function IdolModel4(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return 'instance method.';
    }
}
/**
 * 상속받은 sayHello 를 instance 의 sayHello로 덮어 씌울 수 있다.
 */
IdolModel4.prototype.sayHello = function(){
    return 'prototype method.';
}

const yuJin4 = new IdolModel4('유진', 2003);

// 프로퍼티 셰도잉 ( = class _ Override )
console.log(yuJin4.sayHello());


/**
 * prototype 값, proto 값 변경 가능 => 상속받는 클래스를 변경할 수 있다.
 * 인스턴스를 생성하고 난 다음에도 할 수가 있다.
 * 
 * getPrototypeOf, setPrototypeOf
 * 
 * instance의 __proto__ VS function의 prototype 변경
 */

function IdolModel(name, year){
    this.name = name;
    this.yaer = year;
}
IdolModel.prototype.sayHello = function(){
    return `${this.name} 이(가) 인사 한다.`;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.yaer = year;

    this.dance = function() {
        return `${this.name} 이(가) 춤을 춘다.`;
    }
}

const gaEul = new IdolModel('가을', 2002);
const ray = new FemaleIdolModel('레이', 2004);

console.log('--------- getPrototypeOf -----------');

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); 
// getPrototypeOf : proto를 가져온다.

console.log('--------- setPrototypeOf -----------');
console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(ray.sayHello()); 안됨

// IdolModel의 proototype 을 상속받고싶다.
Object.setPrototypeOf(ray, IdolModel.prototype);
// instance를 만든 다음 상속하는 대상을 바꾼다.
console.log(ray.sayHello());

console.log(ray.constructor);   // constructor : 함수를 가리키는 Circular Reference가 된다.
console.log(ray.constructor === FemaleIdolModel); 
console.log(ray.constructor === IdolModel); 

console.log(gaEul.constructor === IdolModel);

console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);
// 함수에서 prototype을 직접 변경하면 new 키워드로 인스턴스를 생성할 때
// 변겨도니 프로토타입을 그대로 상속받기 때문에 그대로 프로토 값에 입력을 받기 때문에
// 3개의 값들이 전부 같아 진다.

// 이미 생성한 후에 특정 객체의 프로토만 바꿔 버리면 특정 객체의 프로토 값만 변경이 되고
// 실제 객체를 생설할 때 사용한 함수의 프로토 타입은 변경되지 않는다.