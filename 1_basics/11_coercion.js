/**
 * 타입 변환
 * Type Conversion
 * 
 * 1. 명시적
 * 2. 암묵적
 */

let age = 25

// 명시적
let stringAge = age.toString()
console.log(typeof stringAge, stringAge)

// 암묵적
let test = age + ''
console.log(typeof test, test)

console.log('98' + 2)
console.log('98' * 2)
console.log('98' - 2)

console.log('--------------------------')

/**
 * 명시적 변환
 */
// String
console.log(typeof (99).toString(), (99).toString())
console.log(typeof (true).toString(), (true).toString())
console.log(typeof (Infinity).toString(), (Infinity).toString())

console.log('--------------------------')
// 숫자 타입
console.log(typeof parseInt('0'), parseInt('0'))
console.log(typeof parseFloat('0.99'), parseFloat('0.99'))
console.log(typeof +'1', +'1' )

console.log('--------------------------')
/**
 * Boolean 타입으로 변환
 * string 값이 들어있으면 Boolean 기준 T
 * 
 */

console.log(!!'x')
console.log(!'x')

console.log(!!'')

console.log(!0)
console.log(!!0)
console.log(!!'0')
console.log(!!'false')
console.log(!!false)
console.log(!!undefined)
console.log(!!null)

console.log(!!{}) // Object는 Boolean 으로 했을때 무조건 T
console.log(!![]) // Array는 Boolean 으로 했을때 무조건 T

/**
 * F 반환
 * 
 * 1. 아무 글자도 없는 String
 * 2. 값이 없는 경우
 * 3. 0일때 
 */