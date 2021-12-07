const 를 쓰십쇼.

elems.forEach(item => {
    
});
// map과 forEach의 차이점 : 반환값이 있고 없고의 차이!

[1, 2, 3, 4].join()
'1,2,3,4'

[1, 2, 3, 4].join('!!')
'1!!2!!3!!4'

document.write(['<h1>hello world</h1>',
'<h1>hello world</h1>',
'<h1>hello world</h1>',
'<h1>hello world</h1>'].join(''));
// join을 안해주면 hello world 사이에 , 콤마가 들어간다.


// 3번 파일에 forEach 

// 외우지말고 갖다붙이기 (양수,음수,같은값 비교해서 만든 콜백함수 공식을 누가 만든 거다! 해체할 필요가 없엉~~)
data.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0))); // 오름차순 정렬
data.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0))) // 내림차순 정렬


// Array.prototype.sort()

// Map과 new map이 차이 
// x= 5 는 인간이 편하려고 쓰는거고 컴퓨터는 x = new Number(5)
// x = [1, 2, 3, 4, 5] 는 인간의 표기법 컴터는 x = new Array(1, 2, 3, 4, 5)
// new Map 키와 벨류로 이뤄져있는 쌍 객체를 만드는 것 
// new Set 중복을 허락하지 않는


// .map은 어레이 프로퍼티에 있는 맵이다. Map 이랑 다른 아이! 
// [1,2,3].map(x => x ** 2) // [1, 4, 9]     제곱 값이 나온다.