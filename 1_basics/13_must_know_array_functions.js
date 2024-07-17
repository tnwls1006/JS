/**
 * Array Methods
 * 
 * 240717.md
 */

let iveMemvbers =[
    '유진',
    '가을',
    '레이',
    '원영',
    '리즈',
    '이서',
]

console.log(iveMemvbers)


console.log('----------push()---------------')
// push() : 마지막 인덱스에 추가
// iveMemvbers.push('코드')  // 직접적으로 변경함
console.log(iveMemvbers.push('코드'))   // push를 하고 난 다음의 Array 길이
console.log(iveMemvbers)

console.log('----------pop()---------------')
// pop() : 마지막 엘리먼트 삭제
console.log(iveMemvbers.pop())  // 
console.log(iveMemvbers)

console.log('----------shift()---------------')
// shift() : 첫 번째 값을 삭제 -- pop() : 마지막 삭제
console.log(iveMemvbers.shift())
console.log(iveMemvbers)

console.log('----------unshift()---------------')
// unshift() : 첫 번째에 값 추가 -- push() : 마지막에 추가
console.log(iveMemvbers.unshift('유진'))
console.log(iveMemvbers)

console.log('----------splice()---------------')
// splice() : ( index, 삭제 할 갯수 ) index번부터 해당 갯수를 삭제한다.
console.log(iveMemvbers.splice(0, 3))
console.log(iveMemvbers)

/**
 * Array를 변경하지 않는 방법으로 새로운 Array를 만들어내는 방법
 */

iveMemvbers =[
    '유진',
    '가을',
    '레이',
    '원영',
    '리즈',
    '이서',
]

console.log('----------concat()---------------')
// concat() : pish()랑 같은 역활을 하는듯 하나
// 새로운 Array를 만들어서 반환해서 기존 Array를 변경하는지 안하는지 차이가 있다.
console.log(iveMemvbers.concat('코드'))
console.log(iveMemvbers)

console.log('----------slice()---------------')
// slice() : (index1, index2) => index1부터 (index2 - 1)까지 추출
console.log(iveMemvbers.slice(0, 3))
console.log(iveMemvbers)

console.log('----------spread operator---------------')
// spread operator
let iveMemvbers2 = [
    ...iveMemvbers  // ...을 붙이면 상위 리스트에 값들을 넣을 수가 있다.
]
let iveMemvbers3 = iveMemvbers

console.log(iveMemvbers2)
console.log(iveMemvbers3)

console.log(iveMemvbers3 == iveMemvbers3)

// console.log([
//     ...iveMemvbers,
// ] === iveMemvbers)

console.log('----------join()---------------')
// join() : 값을 합친다.
console.log(iveMemvbers.join())
console.log(iveMemvbers.join('/'))
console.log(iveMemvbers.join(', '))

console.log('----------sort,reverse()---------------')
// sort() : 오름차순 정렬
// reverse() : 내림차순 정렬
iveMemvbers.sort();
console.log(iveMemvbers)
console.log(iveMemvbers.reverse())

let numbers = [
    1,
    9,
    7,
    4,
    6,
]
console.log(numbers)
/**
 * a,b 를 비교했을 때
 * 1. a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
 * 2. a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
 * 3. 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a,b) => {
    // return a > b ? 1 : -1; // 0 보다 큰 숫자를 반환하기에 오름차순으로  
    return a > b ? -1 : 1; // 0 보다 작은 숫자를 반환하기에 내림차순으로
})

console.log(numbers)

console.log('----------map()---------------')
// map() : Array에 있는 모든 값들을 순화하면서 그 각각의 값들을 변형시킨다
// 기존 Array를 변형하지 않고 새로운 Array를 반환

console.log(iveMemvbers.map((x) => x))
// x에는 모든 값이 들어감
console.log(iveMemvbers.map((x) => `아이브: ${x}`))

console.log(iveMemvbers.map((x) => {
    if(x === '유진'){
        return `아이브: ${x}`
    } else{
        return x
    }
}))
console.log(iveMemvbers)

console.log('------------------------------')

console.log('----------filter()---------------')
// filter()
numbers = [1, 8, 7, 5, 3]
console.log(numbers.filter((x) => true))
console.log(numbers.filter((x) => false))

console.log(numbers.filter((x) => x % 2 === 0)) // 짝수만 출력

console.log('----------filter()---------------')
// find() : 해당되는 값을 바로 출력 (첫번째로 해당되는)
console.log(numbers.find((x) => x % 2 === 1))

console.log('----------findIndex()---------------')
// findIndex(): find와 같은데 index 반환
console.log(numbers.findIndex((x) => x % 2 === 1))

console.log('----------reduce()---------------')
// reduce()
console.log(numbers.reduce((p, n) => p + n ,0)) 