/**
 * Hoisting
 * 
 * 모든 별수 선언문이 코드 최상단으로 이동되는 것처럼 느껴지는 현상
 * let, const 도 hoisting 가능
 */

console.log('Hello')
console.log('World')
console.log('--------------------')

console.log(name)
var name = '코드'
console.log(name)
/**
 * 코드 실행 순서
 * var name;
 * console.log(name)
 * name = '코드'
 * console.log(name)
 */

console.log(yujin)
// const yujin = '안유진'
let yujin = '안유진'
console.log(yujin)