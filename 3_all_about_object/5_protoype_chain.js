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