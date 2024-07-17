/**
 * Object : 객체
 */

// key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    // method : Object 안에 함수 정의
    dance: function(){
        // return '안유진이 춤을 춥니다'
        return `${this.name}이 춤을 춥니다`
        // this : 객체 자신에 대한 참조 값을 가지고 있다
    }
}

console.log(yuJin)

console.log(yuJin.name)
console.log(yuJin['name'])

const key = 'name'
console.log(yuJin[key])

console.log(yuJin.dance)
console.log(yuJin.dance())

console.log('------------------------------')

const nameKey = 'name'
const nameValue = '안유진'

const groupKey = 'group'
const groupValue = '아이브'

const yuJin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다`
    }
}

console.log(yuJin2)
console.log(yuJin2.dance())

console.log('-----------변경-------------')
yuJin2['group'] = '코드'
console.log(yuJin2)

console.log('-----------추가-------------')
yuJin2['enName'] = 'YuJin'
console.log(yuJin2)

console.log('-----------삭제-------------')
delete yuJin2['enName']
console.log(yuJin2)

/**
 * const로 선언한 객체(Object) 특징
 * 
 * 1. const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2. 객체 안의 property나 methods는 변경할 수 있다.
 */
console.log('--------------------------')

const wonYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(wonYoung)

// wonYoung = {};

wonYoung['group'] = '코드'
console.log(wonYoung)

/**
 * 모든 키값 다 가져오기
 */

console.log('--------------------------')
console.log(Object.keys(wonYoung))

/**
 * 모든 value값 가져오기
 */
console.log('--------------------------')
console.log(Object.values(wonYoung))

const name ='안유진'
const yuJin3 = {
    // name: name,
    name,
}
console.log(yuJin3)