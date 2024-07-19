/**
 * Super and Override
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `${this.name}입니다`;
    }
}

class FemaleIdolModel extends IdolModel{
    // 특기는 적는 프로터리
    part;

    constructor(name, year, part){
        /*
            this.name = name;
            this.year = year;
        */
       // super : 부모클래스를 의미
       // 기존 생성자를 그대로 사용하고 싶을 때 사용
        super(name, year); // == IdolModel();
        this.part = part;
    }

    sayHello(){
        // return `${this.name}입니다. ${this.part}을(를) 맡고있습니다.`
        return `${super.sayHello()} ${this.part}을(를) 맡고있습니다.`
    }
}

const yuJin = new FemaleIdolModel('유진',2003,'보컬');
console.log(yuJin);

const wonYoung = new IdolModel('원영',2004);
console.log(wonYoung);
console.log(wonYoung.sayHello());

console.log(yuJin.sayHello());