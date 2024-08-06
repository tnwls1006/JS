/**
 * Async / Await
*/

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('완료');
        reject('에러');
    }, seconds * 1000)
});


async function runner(){
    // await 는 promise로 만든 함수만 사용할 수 있다.
    // // 1. resolve
    // const result1 = await getPromise(1); // 1초 기다림
    // console.log(result1);
    // const result2 = await getPromise(2); 
    // console.log(result2);
    // const result3 = await getPromise(1); 
    // console.log(result3);

    // 2. reject
    try{
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2); 
        console.log(result2);
        const result3 = await getPromise(1); 
        console.log(result3);
    }catch(e){
        console.log('--catch e---')
        console.log(e);
    }finally{
        console.log('--finally--')
    }
}

runner();
// console.log('끝'); // 끝이 나온 다음에 result1 실행