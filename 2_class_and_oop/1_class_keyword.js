/**
 * Class Keyword
 * 240718.md
 */

// class IdolModel{
//     name = '안유진';
//     year = 2003;
// }

class IdolModel{
    // 없어도 가능, 있는게 좋긴함
    // 프로퍼티
    name;
    year;

    

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `${this.name}은 ${this.year}생입니다.`
    }
}

// constructor : 생성자 

const yuJin = new IdolModel('유진',2003);
console.log(yuJin);
const gaeul = new IdolModel('가을',2002);
console.log(gaeul);
const ray = new IdolModel('레이',2004);
console.log(ray);
const wonYoung = new IdolModel('원영',2004);
console.log(wonYoung);
const liz = new IdolModel('리즈',2004);
console.log(liz);
const eseo = new IdolModel('이서',2007);
console.log(eseo);

console.log(yuJin.name, yuJin.year);

console.log(yuJin.sayName());
console.log(eseo.sayName());

console.log(`IdolModel의 타입: `+ typeof IdolModel);
console.log(`yuJin의 타입: `+ typeof yuJin);