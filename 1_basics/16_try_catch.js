/**
 * try - catch
 * 
 * 에러 잡는 용
 * 1. 발생시킬 때 -> 던진다 ( throw )
 * 2. 명시적으로 인지할때 -> 잡는다 ( catch ) 
 */

function runner(){
    try{
        console.log('Hello');

        throw new Error('문제 발생');
        
        console.log('Code');
    }catch(e){
        console.log('---catch--');
        console.log(e);
    // Error 를 던지면 catch문으로 간다.
    }finally {
        console.log('--finally--')
    // 무조건 실행이 되는 부분 (옵션)
    }
}
runner();

