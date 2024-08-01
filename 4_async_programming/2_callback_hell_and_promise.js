/**
 * Callback
 */

// function waitAndRun(){
//     setTimeout(() =>{
//         console.log('end');
//     }, 2000);
// }

// waitAndRun();

// function waitAndRun2() {
//     setTimeout(() => {
//         console.log('1 callback');

//         setTimeout(() => {
//             console.log('2  callback');

//             setTimeout(() => {
//                 console.log('3 callback');
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }

// waitAndRun2();


/**
 * Promise
 */

// const timeoutPromise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         // resolve 실행
//         resolve('end');
//     }, 2000);
// });
// timeoutPromise.then((res) =>{
//     console.log('---then---');
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('완료'); // [ then ]
        // reject('error'); // [ error ]
        // if(xxx){
        //     resolve('성공')
        // }else {
        //     reject('에러')
        // }
    }, seconds * 1000);
});

// getPromise(1).then((res)=>{
//     console.log('---first then---');
//     console.log(res);
    
//     return getPromise(3);
// }) .catch((res)=>{
//     console.log('--first catch--');
//     console.log(res);
// }).finally(()=>{ // 항상 실행
//     console.log('--finally--')
// });
// .then((res) => {
//     console.log('---seconds---');
//     console.log(res);

//     return getPromise(2);
// }).then((res) =>{
//     console.log('---third---');
//     console.log(res);
// })

// promise 동시 실행
// promise.all => 가장 느린 기준으로 then
Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(3),
]).then((res)=>{
    console.log(res);
});