/**
 * If & switch
 */
console.log('-------- 1 --------')
let number = 5

if (number % 2 === 0){
    console.log('number 변수는 짝수')
}else {
    console.log('number 변수는 홀수')
}

console.log('-------- 2 --------')
if ( number % 2 === 0 ){
    console.log('2의 배수')
}else if ( number % 3 === 0 ){
    console.log('3의 배수')
}else if ( number % 4 === 0 ){
    console.log('4의 배수')
}else if ( number % 5 === 0 ){
    console.log('5의 배수')
}else {
    console.log('2,3,4,5의 배수가 아님')
}

console.log('-------- 3 --------')

const englishDay = 'sunday'
let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일'
        break;
    case 'tuesday':
        koreanDay = '화요일'
        break;
    case 'wednesday':
        koreanDay = '수요일'
        break;
   case 'thursday':
        koreanDay = '목요일'
        break;
    case 'friday':
        koreanDay = '금요일'
        break;    
    default:
        koreanDay = '주말'
        break;
}

console.log(koreanDay)