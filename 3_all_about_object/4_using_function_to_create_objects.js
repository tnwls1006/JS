/**
 * Using Function To Create Objects (생성자 함수)
 */

function IdolModel(name, year){
    // this 키워드가 global에 붙는지 확인하기 위해
    // console.log(this);

    // new 키워드가 실행이 됐는지 안 됐는지 확인하는 방법
    // console.log(new.target);
    // new 키워드 사용시, new가 실행된 대상의 함수가 반환이 되고
    // new 키워드 사용 안 할 시, undefined

    if(!new.target){
        // 강제로 new 키워드를 사용해서 아이돌 모델 함수를 생성자 함수로 실행
        return new IdolModel(name, year);
        // => new 키워들르 사용하든, 안하든 똑같은 생성자 함수로
        // invoke가 되어 실행이 되도록 설정
    }

    this.name = name;
    this.year = year;

    // 이렇게 해도 되지만 하지 말라, 반환한 오브젝트만 반환 됨
    // return {};

    // 프리미티브 값 반환 시, 함수 생성자 함수를 그대로 사용할 수 있다.
    // 굳이 프리미티를 반환할 일은 없다. => 그저 가능하다
    // return 123;

    // 메소드, 함수 추가
    this.dane = function(){
        return `${this.name}이 춤을 춘다.`;
    }
}


/**
 * 위에 있는 함수가 생성자 함수라면 대문자로 시작해서 new 키워드가 필요하다는 것을 명시
 * new 키워드 사용시 함수에서는 this를 어느 위치에 맵핑하는지 결정하게 된다.
 */
const yuJin = new IdolModel('유진',2003);
console.log(yuJin);
// console.log(yuJin.dane());

// new 키워드를 사용 안 할때
// 함수형으로 실행 시 반환해주는게 없어. Undefined가 나옴
const yuJin2 = IdolModel('유진',2003);
console.log(yuJin2);

// this.name, this.yaer의 행방
// global은 파일이 실행 됐을 때 자동으로 생성되는 객체
// console.log(global.name);
/**
 * new 키워드를 사용하지 않고 생성자 함수를 실행 시키면
 * this 키워드가 global에 붙어서 global의 값들을 내가 설정을 하게 된다.
 * => 사용하지 마라
 */


// arrow 함수 (화살표)
const IdolModelArrow =  (name, year) => {
    this.name = name;
    this.year = year;
};

const yuJin3 = new IdolModelArrow('유진', 2003);
console.log(yuJin3);
// 이 함수는 생성자 함수가 아니다 라는 Error 메세지
// new 키워드는 일반 함수에서만 사용 가능