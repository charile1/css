const aespa = ["카리나", "윈터", "지젤", "닝닝"];

// 배열 원본을 훼손하는 이런짓은 하지말자
// aespa.forEach((item, index) => {
//     aespa[index] = item + '🤍';
// });

// forEach는 반환값 없음, map은 반환값 있음
// 원본 데이터 유지하고 새 배열로 나타낼땐 map 
const aespa2 = aespa.map((item) => {
    return item + '🤍';
});
console.log(aespa2);
console.log(aespa);