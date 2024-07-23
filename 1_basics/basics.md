1. Hello World
    - console.log() : 출력방법

2. Comments
    - 주석
    //      한줄 주석
    /** */  여러줄 주석

3. Variable
    - 변수 선언
    var, let, const
    - let, var : 추후에 값 변경 가능
    선언과 할당
    - 변수 선언, 값의 할당
        var, let : 선언을 한 후 따로 할당이 가능
        cosnt : 선언과 할당을 같이 해야 함

4. Naming Conventions
    - 이름 짓기
    일반적으로 영어 사용, 문자와 숫자도 사용 가능
    특수기호는 _ 와 $ 사용 가능
    변수 명은 숫자로 시작할 수가 없음 (ex. 1Tnwls)
    키워드는 변수 명으로 사용 불가능 (ex. const, let ...)

    - camelCase : 소문자, 대문자로 단어 구분
    - snake_case : _ 사용 (파이썬과 같은 언어에서 사용)
    - ParscalCase : C# 과 같은 마이크로소프트 계열 언어에서 사용

5. Data Typet
    - 데이터 타입 (6개의 Primitive Type, 1개의 Object Type)

    **Primitive Type**
    1. Number (숫자)
    Infinity(양수 무한대), -Infinity(음수 무한대)
    2. String (문자열)
        **Template Literal**
        사람이 보는대로 입력 가능 (``)
        - Escaping Character
        1) newLine : \n
        2) tab : \t
        3) backslash : \\
    3. Boolean (True / False)
    4. undefined (정의가 되지 않은 타입)
        사용자가 직접 값을 초기화하지 않을 때 지정되는 값
        직접 undefined 값을 초기화하는건 지양해야한다.
    5. null (정의가 되지 않은 타입, 널)
        undefined와 마찬가지로 값이 없다
        명시적으로 없는 값으로 초기화할 때 사용
    6. Symbol (심볼)
        유일무이한 값을 생성할 때 사용
        다른 primitive 값들과 다르게 symbol함수를 호출해서 사용

    **Object Type**
    7. Object : Function, Array, Object 
        1. Object type
        Map (key:vale의 쌍으로 이루어져있다.)
        2. Array Type
        값을 리스트로 나열할 수 있는 타입

        - static typing : 변수를 선언할 때 어떤 타입의 변수를 선언할 지 명시 ( C )
        - dynamic typing : 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론 ( JS )

6. Hoisting
    모든 변수 선언문이 코드 최상단으로 이동되는 것처럼 느껴지는 현상
    let, const도 hoisting이 가능하다

7. Operators
    - 연산자
    1. 산술 연산자
        1) 덧셈     ( + )
        2) 뺄셈     ( - )
        3) 곱셈     ( * )
        4) 나눗셈   ( / )
        5) 나머지   ( % )
    2. 증가 ( ++ ) 와 감소 ( -- )
    3. 할당 연산자 ( =, +=, -=, *=, /=, %= )
    4. 비교 연산자
        1) 값의 비교        ( == )
        2) 값과 타입의 비교  ( === )
    5. 대소 관계 비교 연산자 ( >, <, <=, >=)
    6. 삼항 조건 연산자 ( A > B ? T : F )
    7. 논리 연산자
        1) A && B ( and, A, B 모두 T여야 T를 반환 )
        2) A || B ( or, A, B 중 하나만 T 여도 T를 반환)
    7. (1) 단축평가
        1) (좌) || (우)
            좌측이 T면 좌측 값 반환, 좌측이 F면 우측 값 반환
        2) (좌) && (우)
            좌측이 T면 우측 값 반환, 좌측이 F면 좌측 값 반환
    8. 지수 연산자 ( ** , 제곱 (ex. 2 ** 2))
    9. null 연산자
        좌측값이 null(undefined)일 때 우측 값 사용

8. Memory
    - 메모리

9. if & switch
    - 조건문
    1. if (Boolean 값으로 평가됨)
        if(조건식) {
            조건이 T면 실행
        }else if(조건) {
            조건이 T면 실행
        }else {
            위 조건이 모두 F면 출력
        }
    2. switch (다양한 상황에 따라 실행할 코드 블록을 결정할 때 사용)
        switch(대상) {
            case 조건1:
                실행문 
                break;  (switch의 중괄호를 빠져나가는 명령어)
            case 조건1:
                실행문 
                break;
            default:
                실행문 
                break;
        }

10. Loop
    - 반복문
    1. for 문
        for(초기값; 조건; 증감식)
    2. while 문
        while(조건식)	{
	        // 반복할 코드
        }
    3. for ... in
        객체의 열거 가능한 속성을 반복
        객체의 속성을 열거할 때 사용
    4. for ... of
        반복 가능한 객체를 순회
        배열, 문자열, Map, Set 등 반복 가능한 객체의 요소를 순회할 때 사용

11. Coercion
    - 타입 변환 Type Conversion
    1. 명시적
        1) String (typeof .toString() )
        2) Number (typeof parseInt() : 정수, typeof parseFloat(): 실수)
        3) Boolean
            - T 반환 : string 값이 들어오면 
            - F 반환
                - 아무 글자도 없는 string
                - 값이 없는 경우
                - 0일 경우
    2. 암묵적

12. Function
    - 함수
    1. 일반 함수
        function abc(a,b){
            return a + b;
        }
    2. 화살표 함수 (arrow function)
        const abc = (a,b) =>{
            return a + b;
        }
    
    console.log(multiplay instanceof Object)
    - instanceof 연산자는 왼쪽 피연산자가 오른쪽 피연산자의 인스턴스인지 여부를 검사

13. Array Methods
    - 배열
    let abc = [
        'a',
        'b',
        'c',
    ]

    1. push() : 마지막 인덱스에 값 추가
    2. pop() : 마지막 엘리먼트 삭제
    3. shift() : 첫번째 값을 삭제
    4. unshitf() : 첫번째에 값 추가
    5. splice() : index번부터 해당 객수를 삭제 (splice(index, 삭제할 갯수))

    - **Array를 변경하지 않는 방법으로 새로운 Array를 만들어내는 방법**
    1. concat() : 마지막 인덱스에 값 추가
    2. slice() : index번부터 index1-1까지 추출 (slice(index,index1))
    3. spread operator : ...를 붙이면 상위 리스트에 값들을 넣을 수가 있다.
    4. join() : 배열의 모든 요소를 문자열로 합쳐서 하나의 문자열을 반환
    5.  map() : Array에 있는 모든 값들을 순화하면서 그 각각의 값들을 변형시킽다

    **배열을 변경하는 방법**
    1. sort() : 오름차순 정렬, 기존 배열을 변경
    - a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
        - return a > b ? 1: -1      (오름차순)
    - a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
        - return a > b ? -1 : 1     (내림차순)
    - 원래 순서를 그대로 두려면 0을 반환 
    2. reverse() : 내림차순 정렬, 기존 배열을 변경

    **다른 배열 메서드**
    1. filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
    2. find() : 해당되는 첫번째 값을 반환
    3. findIndex() : finde와 같지만 index를 반환
    4. reduce() : 배열의 각 요소에 대해 주어진 함수를 실행하여 단일 결과값을 반환

14. Object
    - 객체
    **const로 선언한 객체 특징**
    1. const로 선언할 경우 객체 자체를 변경할 수 없다
    2. 객체 안의 property나 methods는 변경할 수 있다

    - 모든 키값 가져오기    : ( Object.keys() )
    - 모든 value값 가져오기 : ( Object.values() )

15. copy by value / reference
    - 참조
    1) 기본적으로 모든 primitive값은 copy by value
    2. 객체는 copy by reference

    1. copy by value 값에 의한 전달
        let original = '안녕'
        let clone = original
    2. copy by reference 참조에 의한 전달
        let originalObj ={ name: '이름', age = 13, }
        let cloneObject = originalObject
    3. Spread Operator ( ... )
        새 객체가 생성되지만, 내부 참조는 원본과 동일
        복사괸 객체는 원본과 다른 메모리 참조를 가지지만, 내용은 동일

16. try-catch
    - 예외발생
    1. 발생시킨다 : 던진다 (throw)
    2. 명시적으로 인지한다 : 잡는다 (catch)

    try {
      실행 코드
    } catch (err) {
      에러 발생 시 실행 코드
    } finally {
      무조건 실행이 되는 부분 (옵션)
    }
