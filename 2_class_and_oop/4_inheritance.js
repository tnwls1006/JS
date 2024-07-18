/**
 * Inheritance 상속
 * 
 * 240718.md
 */

class IdolModel{
    name;
    year;
    
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance(){
        return `${this.name}이 춤을 춘다.`;
        // return `여자 아이돌이 춤을 춘다.`;
    }
}

class MaleIdolModel extends IdolModel {
    sing(){
        return `${this.name}이 춤을 춘다.`;
        // return `남자 아이돌이 춤을 춘다.`;
    }
}

const yuJin = new FemaleIdolModel('유진',2003);
console.log(yuJin);

const jiMin = new  MaleIdolModel('지민',1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name)

console.log(jiMin.sing())
console.log(jiMin.name);

const cf = new IdolModel('코드',2000);
console.log(cf);

console.log(cf.name);

console.log('----------');
console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);

console.log('----------');
console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);

console.log('-------------');
console.log(cf instanceof IdolModel);
console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof MaleIdolModel);