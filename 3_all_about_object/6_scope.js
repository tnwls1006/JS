/**
 * Scope    
 */

var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}

// levelOne(); 
/**
 * 함수를 선언하면 상위 스코프 상위 변수가 존재하는 스코프를 포함을 하게 된다
 */

function levelOne(){
    var numberOne = 50;

    console.log(numberOne);

}

// levelOne();
/**
 * 값이 50으로 바뀌었다.
 * 가장 가까운 스코프에 있는 변수를 가져오기 때문
 */

console.log(numberOne);
// 함수 스코프 안에서 선언하게 되면 상위 스코프의 변수를 덮어쓰지 않는다.

function levelOne() {
    var numberOne = 50;

    function levelTwo(){
        var numberTwo = 99;

        console.log(`levelTwo numberTwo: ${numberTwo}`);
        console.log(`levelTwo numberOne: ${numberOne}`);
    }

    levelTwo();
    console.log(`levelOne numberOne: ${numberOne}`);
}

levelOne();
// 모든 선언은 가장 가까운 스코프에 있는 선언부터 활용을 하게 된다

console.log(numberOne);
// console.log(numberTwo);
// numberTwo 는 levelTwo의 스코프 안에 선언이 돼 있고 하위 스코프에는 접근 불가

/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다
 * 
 * Dynamic Scope (<-> Lexical Scope)
 * 
 * 실행한 위치가 상위 스코프를 정한다
 */

var numberThree = 3;

function functionOne(){
    var numberThree = 100;

    functionTwo();
}

function functionTwo(){
    console.log(numberThree);
}

functionOne();

console.log('-------------var----------------');

var i = 999;
for(var i = 0; i< 10; i++){
    console.log(i);
}
console.log(`i in global scope: ${i}`);
/**
 * for-loop, while-loop, if : var 키워드를 사용했을 때
 * 새로운 스코프는 만들어내지 않는다.
 */

console.log('-------------let----------------');

i = 999;
// block level scope
for(let i = 0; i< 10; i++){
    console.log(i);
}
console.log(`i in global scope: ${i}`);
/**
 * let, const 함수 사용 시
 * for-loop, if, while-loop 같은 block level scope도 만들어 낼 수 있다.
 * 새로운 스코프를 만들어 낸다.
 */



/**
 * var : 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const : 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */