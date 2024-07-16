/**
 * Loops (반복문)
 * 
 * 1. for
 * for ( 기준을 잡을 변수 선언; 조건; 어떠한 행동을 취할것인가)
 * 
 * 2. while
 */
console.log('------------ 증가 --------------')

for(let i = 0; i <10; i++){
    console.log(i)
}

console.log('------------ 감소 --------------')

for (let i = 10; i>0; i--){
    console.log(i)
}

console.log('------------ 이중 --------------')

for(let i = 0; i<3; i++){
    for(let j = 3; j>0; j--){
        console.log(i,j)
    }
}

console.log('------------ 퀴즈 --------------')
// *을 이용해서 6x6 정사각형을 출력
let star = ''
let line = 6

for(let i = 0; i < line; i++){
    for(let j = 0; j < line; j++){
        star += ' *'
    }
    star +='\n'
}

console.log(star)

console.log('--------------------------')
/**
 * for...in
 * index 값을 가져올 때
 */

const yujin = {
    name: '유진',
    year: 2030,
    group: 'ive',
}

console.log('-------------key-------------')

for(let key in yujin){
    console.log(key)
}

console.log('------------index--------------')

const iveMembersArray = ['유진', '가을','레이','원영','리즈','이서']

for(let key in iveMembersArray){
    console.log(key)
    console.log(`${key}:${iveMembersArray[key]}`)   // key => index
}
console.log('------------value--------------')
/**
 * for .. of -> 루핑 (list ( array ))
 * 값을 가져오고 싶을 때
 */

for(let value of iveMembersArray){
    console.log(value)
}

/**
 * While
 * 
 * while(조건){
 *  행동 [false가 될때까지 실행 될]
 * }
 */
console.log('------------while--------------')

let number = 0;
while( number < 10){
    // console.log(number)
    number++;
}

console.log(number)

/**
 * do ... while
 */
console.log('------------do_while--------------')

number = 10;
do {
    number++
} while ( number < 10);

console.log(number)

/**
 * break
 */

console.log('------------for_break--------------')

for(let i = 0; i< 10; i++){
    if( i == 5){
        break
    }
    console.log(i)
}

console.log('------------while_break--------------')
// 1부터 5까지 실행되는 이유 
// number은 0, if 문에 해당 X, 이후 실행되다 if문에서 5가 걸리기 떄문에

number = 0;

while (number < 10) {
    if(number ===5){
        break
    }
    number++
    console.log(number)
}

/**
 * continue
 */

console.log('------------for_continue--------------')

for(let i = 0; i< 10; i++){
    if( i == 5){
        continue
    }
    console.log(i)
}

console.log('------------while_continue--------------')

number = 0;
while(number < 10){
    number++

    if(number == 5){
        continue
    }
    console.log(number)
}