/**
 * Async theory
 * 
 * 240801.md
 */
// 동기

// function longWork(){
//     const now = new Date();

//     /**
//      * 밀리세컨으로 가져오는 방법
//      * milliseconds sine epoch 
//      */

//     const milliseconds = now.getTime();
//     const afterTowSeconds = milliseconds + 2 * 1000;

//     while(new Date().getTime() < afterTowSeconds){

//     }

//     console.log('완료');
// }

// console.log('hello');
// longWork();
// console.log('world');
/**
 * hello -> (2초 뒤) 완료 -> world
 */

// 비동기
function longWork(){
    /**
     * setTimeout (비동기 함수)
     * 첫번째 파라미터는 함수
     * 두번재 파라미터는 몇 초 동안 기다리다 첫번째 파라미터에 입력된 함수를
     * 실행할지
     */
    setTimeout(() => {
        console.log('완료')
        // 2초 : 2000
    }, 2000);
}

console.log('hello');
longWork();
console.log('world');
/**
 * hello world -> (2초 뒤) 완료
 */