let students = ["짱구", "수지", "맹구", "철수", "훈이", "유리"]
// undefined

for(let i = 0; i < students.length; i++){
    console.log(students[i]+"님 안녕하세요")
}
// VM1125:2 짱구님 안녕하세요
// VM1125:2 수지님 안녕하세요
// VM1125:2 맹구님 안녕하세요
// VM1125:2 철수님 안녕하세요
// VM1125:2 훈이님 안녕하세요
// VM1125:2 유리님 안녕하세요
// undefined

let persons = [
  {name: '철수', age:18},
  {name: '영희', age:22},
  {name: '도우너', age:5},
  {name: '말포이', age:14},
  {name: '도비', age:3},
]
// undefined

for(let h = 0; h < persons.length; h++) {
    if( persons[h].age > 18 ) {
        console.log(persons[h].name+"님은 성인입니다")
    }else {
        console.log(persons[h].name+"님은 미성년자입니다")
    }
}
// VM1738:5 철수님은 미성년자입니다
// VM1738:3 영희님은 성인입니다
// VM1738:5 도우너님은 미성년자입니다
// VM1738:5 말포이님은 미성년자입니다
// VM1738:5 도비님은 미성년자입니다
// undefined

const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
    ]

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM1890:2 1 레드향
// VM1890:2 2 샤인머스켓
// VM1890:2 3 산청딸기
// VM1890:2 4 한라봉
// VM1890:2 5 사과
// VM1890:2 6 애플망고
// VM1890:2 7 딸기
// VM1890:2 8 천혜향
// VM1890:2 9 과일선물세트
// VM1890:2 10 귤