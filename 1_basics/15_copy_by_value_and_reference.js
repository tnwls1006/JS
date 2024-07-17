/**
 *  copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1. 기본적으로 모든 primitive 값은 copy by value
 * 2. 객체는 copy by reference
 */
// 1. copy by value
let original = '안녕하세요'
let clone = original

console.log(original)
console.log(clone)

clone += ' 안유진 입니다.'
console.log('--------------')
console.log(original)
console.log(clone)

// 2. copy by reference
let originalObj = {
    name: '안유진',
    group: '아이브',
}

let cloneObj = originalObj

console.log(originalObj)
console.log(cloneObj)

originalObj['group'] = '코드'
console.log(originalObj)
console.log(cloneObj)

console.log(originalObj === cloneObj)
console.log(original === clone)

originalObj = {
    name: '나야나',
    group: '코드',
}

cloneObj = {
    name: '나야나',
    group: '코드',
}

console.log(originalObj === cloneObj)

console.log('----------------------')

const YuJin1 = {
    name: '안유진',
    group: '아이브',
}

const YuJin2 = YuJin1

const YuJin3 = {
    name: '안유진',
    group: '아이브',
}

console.log(YuJin1 === YuJin2)
// T ( 1,2 copy by reference 같은 메모리 공간을 참조)
console.log(YuJin1 === YuJin3)
// F (서로 다른 메모리 공간을 참조)
console.log(YuJin2 === YuJin3)
// F (서로 다른 메모리 공간을 참조)

console.log('-----------spread operator-----------')
// spread operator => coby by value
// 위치가 제일 중요하다

const YuJin4 = {
    ...YuJin3,
}
console.log(YuJin4)

console.log(YuJin4 === YuJin3)
// F (서로 다른 메모리 공간)

console.log('-----------추가-----------')
const YuJin5 = {
    year: 2003,
    ...YuJin3,
}

console.log(YuJin5)

console.log('-----------변경-----------')
const YuJin6 = {
    // name: '코드', // 변경 안됨
    ...YuJin3,
    name: '코드', // 변경 됨 ( 입력이 된 후 값을 변경 했기 때문에 - 순서 중요)
}

console.log(YuJin6)

console.log('-----------Array-----------')
const numbers = [1, 3, 5]

const numbers2  = [
    // 10, // 가장 앞에 추가
    ...numbers,
    10, // 가장 뒤에 추가
]
console.log(numbers2)