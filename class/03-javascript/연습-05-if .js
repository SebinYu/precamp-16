1+1
// 2
1+"1"
// '11'
"안녕하세요" + "반갑습니다"
// '안녕하세요반갑습니다'
"123" === 123
// false
"123" == 123
// true : 느슨한 연산자( 판단기준 허들이 낮다 - 쓰지말자)
!false
// true

if(1+1===2) {
    console.log("정답입니다.")
}else{
    console.log("틀렸습니다")
}
// VM590:2 정답입니다.
// undefined
if(true) {
    console.log("정답입니다.")
}else{
    console.log("틀렸습니다")
}
// VM655:2 정답입니다.
// undefined
if(false) {
    console.log("정답입니다.")
}else{
    console.log("틀렸습니다")
}
// VM681:4 틀렸습니다
// undefined
const password1 = "피카츄빵"
const password2 = "포켓몬"
if(password1===password2) {
    alert("비밀번호가 일치합니다")
}else {
    alert("무언가 잘못되었다")
}


// -------나이 구분: if 조건문
const profile ={
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}

if(profile.age > 20){
    console.log("성인입니다")
}else if(profile.age >= 8 && profile.age <= 19) {
    console.log("학생입니다")
}else if(profile.age >= 0) {
    console.log("어린이입니다")
}else {
    console.log("잘못된 입력입니다")
}
// 학생입니다

profile.age=80

if(profile.age > 20){
    console.log("성인입니다")
}else if(profile.age >= 8 && profile.age <= 19) {
    console.log("학생입니다")
}else if(profile.age >= 0) {
    console.log("어린이입니다")
}else {
    console.log("잘못된 입력입니다")
}
// 성인입니다


//------for 반복문-------------
const children = ["철수", "영희", "훈이"]

for (let i = 0; i<3;i++){
    console.log(children[i]+"입니다")
}
// VM658:2 철수입니다
// VM658:2 영희입니다
// VM658:2 훈이입니다
for (let i = 0; i<children.length; i++){
    console.log(children[i]+"입니다")
}
// VM658:2 철수입니다
// VM658:2 영희입니다
// VM658:2 훈이입니다

