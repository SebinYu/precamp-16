
// 연습파일 제작시- 콘솔창 값들을 복붙 - 결과값은 주석처리하여 공부
let classmates = ["다슬님", "영주님", "은채님", "연찬님"]
// undefined
classmates
// (4) ['다슬님', '영주님', '은채님', '연찬님']
classmates[0]
// '다슬님'
classmates[1]
// '영주님'
classmates[2]
// '은채님'
classmates[3]
// '연찬님'
classmates[4]
// undefined
classmates.includes("홍길동")
// false
classmates.push("홍길동")
// 5
classmates
// (5) ['다슬님', '영주님', '은채님', '연찬님', '홍길동']
classmates.includes("홍길동")
// true
classmates[3]
// '연찬님'
classmates.pop()
// '홍길동'
classmates.length
// 4


//배열 2개 연결
let developer = ["개발사고", "협업능력", "꾸준한 성격", "공유태도", "전반적 환경을 이해하려는 자세"]
// undefined
developer[2]
// '꾸준한 성격'
developer[4]
// '전반적 환경을 이해하려는 자세'
let dream =["커리어점프", "성공", "할수있다"]
// undefined
developer.concat(dream )
// (8) ['개발사고', '협업능력', '꾸준한 성격', '공유태도', '전반적 환경을 이해하려는 자세', '커리어점프', '성공', '할수있다']


