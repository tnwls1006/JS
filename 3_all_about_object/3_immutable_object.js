/**
 * Immutable Object 
 */

const yuJin = {
    name: '유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
        // 연도 저장
    },
};

console.log(yuJin);

console.log('------------Extensible--------------');
/**
 * Extensible : 확자아이 가능한지 여부를 설정할 수 있다.
 */

console.log(Object.isExtensible(yuJin));
/**
 * 객체를 생성할 때 object의 기본 extensible 값은 T
 */
yuJin['position'] = 'vocal';
console.log(yuJin);


Object.preventExtensions(yuJin); // preventExtensions : 객체의 확장을 금지
console.log(Object.isExtensible(yuJin));    // F

yuJin['groupName'] = 'ive';     // 에러를 던지지는 않지만 값 추가를 못함
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin); // 삭제는 가능함, 추가만 안됨


console.log('------------Seal-------------');
/**
 * Seal : 봉인이 되어 있는지, 안되어 있는지
 * 봉인이 되어있지 않을때 기본적으로 작업할 수 있는 모든 오브젝트 기능 사용 가능.
 */

const yuJin2 = {
    name: '유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
        // 연도 저장
    },
};

console.log(yuJin2);

console.log(Object.isSealed(yuJin2));   // 기본값 : F

Object.seal(yuJin2);    // 봉인
console.log(Object.isSealed(yuJin2));   // T
/**
 * Seal을 하게 되면 값 추가 안됨.
 * 삭제도 되지 않음
 * 프로퍼티 애트리뷰트는 변경이 됨 
 * 
 * 에러도 발생하지 않음
 * 
 * => (프로퍼티 애트리뷰트)configurable를 false로 만드는 것과 같다
 */

yuJin2['groupName'] = 'ive';
console.log(yuJin2);

delete yuJin2['name'];
console.log(yuJin2);

// 프로퍼티 애트리뷰트 변경
Object.defineProperty(yuJin2, 'name', {
    value: '코드',
    writable: false,
})

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log('------------Freezed-------------');
/**
 * Freezed : 가장 높은 Immutable 프로그래밍의 등급 (동결)
 * 
 * 읽기 외의 모든 기능을 불가능하게
 * 
 * Extensible, Seal 기능을 다 추가하고 나서도 writable까지도 F로 만드는다.
 * 값을 추가, 삭제, 변경 못함
 * 프로퍼티 애트리뷰트 (Property Attribute)도 변경하지 못한다.
 */

const yuJin3 = {
    name: '유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
        // 연도 저장
    },
};
console.log(Object.isFrozen(yuJin3));   // 기본값 F

Object.freeze(yuJin3);  // 동결
console.log(Object.isFrozen(yuJin3));   // T

yuJin3['groupName'] = 'ive';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

/*
// 프로퍼티 애트리뷰트 변경 안됨 (에러 발생)
Object.defineProperty(yuJin3, 'name', {
    value: '코드',
});
console.log(yuJin3);
*/

console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
// writable: false, enumerable: true, configurable: false

const yuJin4 = {
    name: '유진',
    year: 2003,
    wonYoung: {
        name: '원영',
        year: 2004,
    },
};
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));
/**
 * 상위 Object를 Freeze 했다 해서 하위 Object도 Freeze가 되는게 아니다.
 * Extensible, Seal도 마찬가지
 * 
 * 하위 Object까지 Freeze, Extensible, Seal이 하고싶다면
 * 재귀 함수 등을 사용하여 내부에 있는 값들도 바꿔줘야 함.
 */
