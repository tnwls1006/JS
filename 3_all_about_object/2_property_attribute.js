/**
import MainHeader from './../../Todo-JS/src/component/MainHeader';
 * Property Attribute
 * 
 * property : Object를 선언을 했을 때 안에 들어가는 값들
 * 1. 데이터 프로퍼티 : 키와 값으로 형성된 실질적인 값을 갖고있는 프로퍼티
 * 2. 엑세서 프로퍼피 : 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                      설정 할 때 호출되는 함수로 구성된 프로퍼티
 *                      EX) getter와 setter
 */

const yuJin = {
    name: '유진',
    year: 2003,
};

/**
 * 대문자로 시작 - 생성자 함수이거나 클래스의 이름
 * 셍상지 힘수 또는 클래스 뒤에 (.)가 붙으면 static Function
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * { value: 2003, writable: true, enumerable: true, configurable: true }
 * 
 * 1. value : 실제 프로퍼티의 값
 * 2. writable : 값을 수정할 수 있는지 여부, false로 설정하면 프로퍼티 값을
 *              수정 할 수 없다.
 * 3. enumerable : 열거가 가능한지 여부.
 *              for...in Loop 등을 사용 할 수 있으면 T를 반환.
 * 4. configurable : 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판다.
 *                  F일 경우 프포퍼티 삭제나 어트리뷰트 변경이 금지
 *                  단, writable이 T인 경우 값 변경과 writable을 변경하는 건
 *                  가능
 */

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {    // 데이터 프로퍼티
    name: '유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
        // getFullYear() : 현재가 몇년도인지 알 수 있는 함수
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
};

console.log(yuJin2);
// get
console.log(yuJin2.age);

// set
yuJin2.age = 32;

console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

// property attribute 재정리
// (프로퍼티를 추가하고 싶은 객체, 추가할 키 값, 프로퍼티 애트리뷰트 정의)
Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    // writable: false, 도 가능
    enumerable: true,
    configurable: true,
    // writable, enumerable, configurable 모두 입력을 안하면 F로 기본값
})

console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

yuJin2.height = 165;
console.log(yuJin2);

console.log('------------------------------------')
/**
 * Writable
 */
Object.defineProperty(yuJin2, 'height',{
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 172;
console.log(yuJin2);
// writable을 false로 설정해서, 변경 되지 않음


console.log('-------------Enumerable----------------')
/**
 * Enumerable
 */
console.log(Object.keys(yuJin2));

for(let key in yuJin2){
    console.log(key);
};

Object.defineProperty(yuJin2, 'name',{
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2,'name'));

console.log('----------------------')
console.log(Object.keys(yuJin2));

for(let key in yuJin2){
    console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);
// name이 사라진 것은 아닝고 열거를 할 수 없을 뿐

console.log('-------------Configurable----------------')
/**
 * Configurable
 */

Object.defineProperty(yuJin2, 'height',{
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

// configurable이 F가 되면 값을 변경할 수가 없다.
// 단, writable이 T인 경우 값 변경과 writable을 변경하는 건 가능


Object.defineProperty(yuJin2,'height', {
    value: 172,
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'))