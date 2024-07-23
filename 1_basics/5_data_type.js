
/**
 * Data Type
 * 
 * 6개의 Primitive Type, 1개의 object Type
 * 
 * Primitive Type
 * 1. Number ( 숫자 )
 * 2. String ( 문자열 )
 * 3. Boolean ( T /F )
 * 4. undefined ( 정의가 되지 않은 타입 )
 * 5. null ( 널, 정의가 되지 않은 타입 )
 * 6. Symbol ( 심볼 )
 * 
 * object Type
 * 7. Object ( 객체 ) : Function, Array, Object
 */

/**
 * Number Type
 */

const age = 25
const tempature = -10
const pi = 3.14

// typeof 타입 확인
console.log(typeof age)
console.log(typeof tempature)
console.log(typeof pi)

console.log('-------------------')

const infinity = Infinity    // 양수 무한대
const nInfinity = -Infinity  // 음수 무한대

console.log(typeof infinity)
console.log(typeof nInfinity)
console.log('-------------------')

/**
 * String Type
 */

const code = "'코'드"
console.log(code)
console.log(typeof code)

const ive = "'아이브', 안유진"  // 작음 따옴표 표시 방법
console.log(ive)

/**
 * Template Literal
 * 
 * 사람이 보는대로 입력 가능
 * 
 * Escaping Character
 * 1. newLine : \n
 * 2. tab : \t
 * 3. 백슬래시를 String으로 표현하고싶다면 두번 입력 
 * 
 */

const iveYuJin1 = '아이브\n안유진'
console.log(iveYuJin1)

const iveYuJin2 = '아이브\t안유진'
console.log(iveYuJin2)

const iveYuJin3 = '아이브\\안유진'
console.log(iveYuJin3)

const iveYuJin4 = '아이브\'안유진'
console.log(iveYuJin4)

const iveYuJin5 = `아이브  '" / 가  나
안유진` // 템플릿 리터럴 ``(~)
console.log(iveYuJin5)

console.log(typeof iveYuJin5)

const groupName = '아이브'
console.log(groupName + '안유진')
console.log(`${groupName} 안유진`)
console.log('-------------------')

/**
 * Boolean Type
 */

const isT = true;
const isF = false;
console.log(typeof isT)
console.log(typeof isF)
console.log('-------------------')

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * 
 * 직접 undefined 값을 초기화하는건 지양해야함
 */

let noInit;
console.log(noInit)
console.log(typeof noInit)
console.log('-------------------')

/**
 * Null
 * 
 * undefined와 마찬가지로 값이 없다.
 * JS에서 개발자가 명시적으로 없는 값으로 초기화할때 사용
 */

let init = null;
console.log(init)
console.log(typeof init)
console.log('-------------------')

/**
 * Symbol Type
 * 
 * 유일무이한 값을 생성할 때 사용
 * 다른 primitive 값들과 다르게 Symbol함수를 호출해서 사용
 */

const test1 = '1'
const test2 = '2'

console.log(test1 === test2)

const symbol1 = Symbol('1')
const symbol2 = Symbol('1')

console.log(symbol1 === symbol2)
console.log('-----------------------------')

/**
 * Object Type
 * Map
 * Key:value 의 쌍으로 이루어져있다.
 */

const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
}

console.log(dictionary)
console.log(dictionary['red'])
console.log(dictionary['orange'])
console.log(dictionary['yellow'])

console.log(typeof dictionary)

/**
 * Array Type
 * 
 * 값을 리스트로 나열할 수 있는 타입
 */

const iveMembersArray = [
    '안유진','가을','레이','장원영','리즈','이서'
];

console.log(iveMembersArray)

/**
 * index
 * 
 * 0부터 시작해서 1씩 올라감
 */
console.log(iveMembersArray[0])
console.log(iveMembersArray[2])
console.log(iveMembersArray[5])

iveMembersArray[0] = 'Jin'
console.log(iveMembersArray)
console.log(typeof iveMembersArray)


/**
 * static typing : 변수를 선언할 떄 어떤 타입의 변수를 선언할 지 명시
 *  C
 * dynamic typing : 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론
 *  JS
 */