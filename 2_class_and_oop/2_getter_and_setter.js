/**
 * Getter and Setter 
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    /**
     * 1. 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2. private한 값을 반환할 때
     */
    get nameAndYear(){
        // 1번 방법
        return `${this.name}-${this.year}`;
    }

    /**
     * 이름을 겹치게 사용함
     * 파라미터는 무조건 1개
     * 정의한 값을 변경 할 수 있기 때문에 선호하는 방식은 아님
     * 
     * 1. 값을 새로 정의할 떄
     */
    set setName(name){
        this.name = name;
        // this.name 은 프로퍼티 name
    }
}

const yuJin = new IdolModel('유진',2003);
console.log(yuJin);
console.log(yuJin.nameAndYear); // nameAndYear() 로 하면 안됨

yuJin.setName ='원영';
console.log(yuJin)

console.log('-----private # ---------')

class IdolModel2 {
    #name;  // #을 붙이면  private
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('유진',2003);
console.log(yuJin2)
console.log(yuJin2.name)

yuJin2.name = '이서';
console.log(yuJin2);
console.log(yuJin2.name);