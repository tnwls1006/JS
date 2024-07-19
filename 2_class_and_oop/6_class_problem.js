/**
import { Navigate } from 'react-router-dom';
 * Class Problem
 */

/**
 * 클래스 강의를 끝낸기념 문제
 * 
 * 1) Country 클래스는 나라 이름과 나라에 해당되는 아이돌 그룹정보를 
 *    리스트로 들고있다. (name 프로퍼티, idolGroups 프로퍼티)
 * 2) IdolGroup 클래스는 아이돌 그룹 이름과 멤버 정보를 리스트로 들고있다.
 *    (name 프로퍼티, members 프로퍼티)
 * 3) Idol 클래스는 아이돌 이름과 출생년도 정보를 들고있다.
 *    (name 프로퍼티, year 프로퍼티)
 * 4) MaleIdol 클래스는 Idol 클래스와 동일하게 
 *    name, year 프로퍼티가 존재한다
 *    추가로 sing() 함수를 실행하면 ${이름}이 노래를 합니다.
 *    라는 스트링을 반환해준다.
 * 5) FemaleIdol 클래스는 Idol 클래스와 동일하게
 *    name, year 프로퍼티가 존재한다.
 *    추가로 dance() 함수를 실행하면 ${이름}이 춤을 춥니다.
 *    라는 스트링을 반환해준다.
 * 
 * 아래 정보가 주어졌을때 위 구조로 데이터를 형성해보라.
 * map() 함수를 잘 활용하면 좋다.
 */

// 한국 아이돌, '아이브'란 이름의 그룹, 여자 걸그룹
const iveMembers = [
    {
        name: '유진',
        year: 2003,
    },
    {
        name: '가을',
        year: 2002,
    },
    {
        name: '레이',
        year: 2004,
    },
    {
        name: '원영',
        year: 2004,
    },
    {
        name: '리즈',
        year: 2004,
    },
    {
        name: '이서',
        year: 2007,
    },
]

// 한국 아이돌, '온스타엑스'란 이름의 그룹, 남자 걸그룹
const monXmembers = [
    {
        name: '셔누',
        year: 1992,
    },
    {
        name: '민혁',
        year: 1993,
    },
    {
        name: '기현',
        year: 1993,
    },
    {
        name: '형원',
        year: 1994,
    },
    {
        name: '주현',
        year: 1994,
    },
    {
        name: '아이엠',
        year: 1996,
    },
]

class Country {
    // 나라 이름, 나라에 해당되는 아이돌 그룹정도
    name;
    idolGroups;

    constructor(name, idolGroups){
        this.name = name;
        this.idolGroups =idolGroups;
    }
}

class idolGroups {
    // 아이돌 그룹 이름, 멤버 정보
    name;
    members;

    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}

class Idol {
    // 아이돌 이름, 출생년도
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class MaleIdol extends Idol {

    sing() {
        return `${this.name}이 노래를 합니다`; 
    }
}

class FemaleIdol extends Idol{

    dance(){
        return `${this.name}이 춤을 춥니다`
    }
}

console.log('----------Members-------------');
// Members (아이돌 이름, 출생년도)
const cIveMembers = iveMembers.map(
    (x) => new FemaleIdol(x['name'], x['year'])
);
console.log(cIveMembers);

const cMonXmembers = monXmembers.map(
    (x) => new MaleIdol(x['name'], x['year'])
);
console.log(cMonXmembers);


console.log('----------Group-------------');
// Group (그룹 이름, 멤버 정보)
const iveGroup = new idolGroups(
    '아이브',
    cIveMembers,
);
console.log(iveGroup);

const mxGroup = new idolGroups(
    '몬스타엑스',
    cMonXmembers,
);
console.log(mxGroup);


console.log('----------Country-------------');
// Country (나라 이름, 나라에 해당되는 그룹정보)
const korea = new Country(
    '대한민국',
    [
        /**
         * 깊이가 3번까지 들어가게 되면 기본 출력 값으로는 출력이 되지않는다.
         * 타입만 나오게 된다.
         */
        iveGroup,
        mxGroup,
    ],
);
console.log(korea);

// members부터 작업한 것을 한번에 처리
const allTogether = new Country(
    '대한민국',
    [
        new idolGroups(
            '아이브',
            iveMembers.map(
                (x) => new FemaleIdol(x['name'], x['year'])
            ),
        ),
        new idolGroups(
            '몬스타엑스',
            monXmembers.map(
                (x) => new MaleIdol(x['name'], x['year'])
            ),
        ),
    ],
);
console.log(allTogether);