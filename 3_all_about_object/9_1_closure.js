/**
 * Closure
 * 
 * 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합
 * 
 * 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure
 * 
 */

// 하위 함수(innerGetNumber)가 더 오래 살아있는 경우가 아님
function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber();
}

// console.log(number()); 안됨

// console.log(getNumber()); 


// 하위 함수(innerGetNumber)가 더 오래 살아있는 경우
function getNumber() {
    var number = 5;
    
    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();

console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱
 */

function cacheFunction(newNumb){
    // 계산이 오래걸린다는 가정
    var number = 10 * 10;

    function innerCacheFunction(newNumb){
        return number * newNumb;
    }

    return innerCacheFunction;
}

const runner2 = cacheFunction(); // 께산을 여기서 한번만
console.log(runner2(10));
console.log(runner2(20));

// console.log(cacheFunction(10));
// console.log(cacheFunction(20));
// console.log(cacheFunction(30));

console.log('-- 반복적으로 특정 값을 변환해야될 때, 값을 변경 해야 될 때 --');
// 반복적으로 특정 값을 변환해야될 때, 값을 변경 해야 될 때
function cacheFunction2(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 2) 정보 은닉
 */
console.log('-- 정보 은닉 --');

function Idol(name, year){
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function(){
        return `${this.name}은 ${_year}에 태어났다.`;
    }
}

const yuJin = new Idol('유진',2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
console.log(yuJin._year);   // 객체 프로퍼티로 액서스 불가능