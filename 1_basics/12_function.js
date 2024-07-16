/**
 * Function (함수)
 */

/**
 * DRY
 * D : Don't
 * R : Repeat
 * Y : Yourself
 */

console.log((2 * 10 / 2 % 3).toString())
console.log((3 * 10 / 2 % 3).toString())

function calculate(){
    console.log((2 * 10 / 2 % 3).toString())
}

calculate();

function calculate(number){
    console.log((number * 10 / 2 % 3).toString())
}

/**
 * 함수에서 입력 받는 값에 대한 정의 Parameter (number)
 * 실제 입력하는 값은 argument (4)
 */
calculate(4)
calculate(5)

function multiplay(x, y){
    console.log(x * y)
}

multiplay(2, 4)

function multiplay(x, y = 10){
    console.log(x * y)
}  

multiplay(2, 4)
multiplay(2)

console.log('-----------------')
/**
 * 반환 return
 */

function multiplay(x,y) {
    return x * y
}

const  result1 = multiplay(2,4)
console.log(result1)

const result2 = multiplay(3,4)
console.log(result2)

console.log('-----------------')

/**
 * Arrow 함수 (화살표)
 */

// const multiply = (parameter)=>{
//     함수 바디
// }

const multiply2 = (x, y) =>{
    return x * y
}

console.log(multiply2(3, 4))

const multiplay3 = (x, y) => x * y
console.log(multiplay3(4, 4))

const multiply4 = x => x * 2
console.log(multiply4(2))

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`
console.log(multiply5(2)(5)(7))

function multiply6(x){
    return function(y){
        return function(z){
            return `x: ${x} y: ${y} z: ${z}`
        }
    }
}

console.log(multiply6(3)(4)(5))

const multiplyTwo = function (x,y) {
    return x * y
}
console.log(multiplyTwo(4,5))

console.log('--------------------')

const multiplyThree = function(x, y, z){
    console.log(arguments)

    return x * y * z
}

console.log(multiplyThree(4,5,6))

const multiplyAll = function(...arguments){  // 무한하게 파라미터를 받을 수 있음
    return Object.values(arguments).reduce((a,b) => a * b, 1)
}
console.log(multiplyAll(3,4,5,6,7,8,9,10))

/**
 * // 변수 명 없이 바로 실행 _ immediately invoked function
 * (function(x, y){
 *      console.log(x * y)
 * })(4,5) 
 */


console.log('----------------')

console.log(typeof multiplay)
console.log(multiplay instanceof Object)
// 좌측 : 비교하려는 값
// multiplay 가 Object인가