function hello(name) {
    alert(name + "님 안녕하세요")
}

hello("김주은")
// undefined

function hello(name) {
     return name + "님 안녕하세요"
}
// undefined

hello("유세빈")
// '유세빈님 안녕하세요


// 중간에 변수명과 같은 내용이 들어간다면 백틱을 통해 추가한다

let students = ["짱구", "수지", "맹구", "철수", "훈이", "유리"]
// 정확하게 영자 기입 = 오타주의 : 웬만한 태그 및 기능을 추가했음에도 오류나는 대부분의 원인 
function greetingFriends(arr) {
    for(let i=0; i< arr.length; i++){
        console.log(`${arr[i]} 님 반갑습니다`)
    }
}
// undefined
greetingFriends(students)
// VM892:3 짱구 님 반갑습니다
// VM892:3 수지 님 반갑습니다
// VM892:3 맹구 님 반갑습니다
// VM892:3 철수 님 반갑습니다
// VM892:3 훈이 님 반갑습니다
// VM892:3 유리 님 반갑습니다


//-------타이머 ------------------------------------
setTimeout(function() {
    console.log("3초가 지났습니다")
}, 3000)

// VM250:2 3초가 지났습니다
// VM254:2 3초가 지났습니다


// 시간 누적
setInterval(function() {
    console.log("1초")
},1000)

// 42VM404:2 1초

// let time = 10
setInterval (function(){
    if(time>=0){
        console.log(time)
        time = time - 1     
    }
}, 1000)



// 타이머 만들기
let time = 180

setInterval(function(){
    if(time >= 0) {
        const min = String( Math.floor( time/60 ) ).padStart(2, "0")
        const sec = String(time%60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time - 1
    }
},1000)