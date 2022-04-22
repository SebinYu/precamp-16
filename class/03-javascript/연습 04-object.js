let friend = {
    name : "철수",
    age : 13,
    camp : "코드캠프"
}
// undefined
friend
// {name: '철수', age: 13, camp: '코드캠프'}
friend.name
// '철수'
friend.age
// 13
friend.camp
// '코드캠프'
friend.school
// undefined
friend.nationality = "Korea"
// object
// 속성(key:value)

const classmates = [
    { name : "철수", age : 13, school : "다람쥐초등학교"},
    { name : "영희", age : 8, school : "공룡초등학교"},
    { name : "훈이", age : 11, school : "거북이초등학교"}
]

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

console.log(firuts[0].number + " " + firuts[0].title)
console.log(firuts[1].number + " " + firuts[1].title)
console.log(firuts[2].number + " " + firuts[2].title)
console.log(firuts[3].number + " " + firuts[3].title)
console.log(firuts[4].number + " " + firuts[4].title)
console.log(firuts[5].number + " " + firuts[5].title)
console.log(firuts[6].number + " " + firuts[6].title)
console.log(firuts[7].number + " " + firuts[7].title)
console.log(firuts[8].number + " " + firuts[8].title)
console.log(firuts[9].number + " " + firuts[9].title)


const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}
// undefined


//--------객체에 값 추가삭제----------
// 객체.키 = 데이터값
student.tall="5"
// '5'
// student
// {name: '철수', age: 8, tall: '5'}

//객체에 객체 추가하기 가능
student.school= {
	name: "다람쥐초등학교",
	teacher: "다람이",
} 
// student
// {name: '철수', age: 8, tall: '5', school: {…}}