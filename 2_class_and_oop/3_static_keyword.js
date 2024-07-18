/**
 * Static Keyword
 */

/*
class IdolModel{
    name;
    year;
    static groupName = '아이브';
    // static : 클래스 자체에 귀속

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    static returnGroupName(){
        return '아이브';
    }
}

const yuJin = new IdolModel('유진',2003);
console.log(yuJin);

console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName());
*/

/**
 * factory constructor
 */

class IdolModel{
    name;
    year;

    constructor(name, yaer){
        this.name = name;
        this.year = yaer;
    }

    static fromObject(object){
        return new IdolModel(
            object.name,
            object.yaer,
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1],
        )
    }
}

// const yuJin2 = new IdolModel('유진',2003);
const yuJin2 = IdolModel.fromObject({
    name: '유진',
    yaer: 2003,
});
console.log(yuJin2);

const wonYoung = IdolModel.fromList(
    [
        '원영',
        2004,
    ]
);

console.log(wonYoung);