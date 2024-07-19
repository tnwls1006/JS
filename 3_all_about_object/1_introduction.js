/**
 * All about Objects ( 객체에 대한 모든 것 )
 * 
 * 객체를 선언할 때 사용할 수 있는 방법 들
 * 1. object를 생성해서 객체 생성 - 기본기 {}
 * 2. class를 인스턴스화해서 생성 - class와 OOP
 * 3. function을 사용해서 객체 생성
 * ==> 실제 객체를 반환
 */

const yuJin = {
    name: '유진',
    yaer: 2003,
};

console.log(yuJin);

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
console.log(new IdolModel('유진', 2003));

// 생성자 함수
function IdolFunction(name, year){
    this.name = name;
    this.yaer = year;
}

const gaEul = new IdolFunction('가을',2002);
console.log(gaEul);