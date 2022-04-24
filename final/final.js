function changePhone1(){
    const phone1 = document.getElementById("phone1").value
    if(phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

function changePhone2(){
    const phone2 = document.getElementById("phone2").value
    if(phone2.length === 4) {
        document.getElementById("phone3").focus()
    }
}



// 각 번호 자리수 만족 시, 토큰버튼의 디자인/기능 활성화
// 토큰버튼 경우, html에 이미 disabled로 속성이 지정되어 있으므로, removeAttribute("disabled")를 넣어 사용가능하게 만든다
function changePhone3(){
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value

    
    if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4){
        document.getElementById("token__button").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;"
        document.getElementById("token__button").removeAttribute("disabled")
    }

}


// Math.random()는 0.xxxx로 랜덤 소수점 숫자 생성
// Math.floor는 소수점 자리제거
// 토근 발급 시, '인증번호 전송' 버튼 비활성화
// '인증 완료' 버튼 활성화
function getToken(){
    // 인증번호 생성/화면에 띄우기
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("token").innerText = token


    document.getElementById("token__button").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("token__button").setAttribute("disabled", "true")
    document.getElementById("token__timer__confirm__button").style="background-color: #0068FF; color: #FFFFFF; cursor: pointer;"
    document.getElementById("token__timer__confirm__button").removeAttribute("disabled")
    getTokenTimer()
}




let interval;
function getTokenTimer(){
    let timer = 10
    interval = setInterval(() => {
        if(timer >= 0){
            const minutes = Math.floor(timer / 60)
            const seconds = timer % 60

            document.getElementById("token__timer").innerText = minutes + ":" + String(seconds).padStart(2, "0")
            timer -= 1
        } else {
            document.getElementById("token").innerText = "000000"
            document.getElementById("token__button").style = ""
            document.getElementById("token__button").setAttribute("disabled", "true")
            
            document.getElementById("token__timer").innerText = "3:00"
            document.getElementById("token__timer__confirm__button").style = ""
            document.getElementById("token__timer__confirm__button").setAttribute("disabled", "true")
            
            clearInterval(interval)
        }
    }, 1000)
}



function getTokenTimerConfirm(){
    clearInterval(interval)
    document.getElementById("token__timer__confirm__button").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("token__timer__confirm__button").setAttribute("disabled", "true")
    document.getElementById("token__timer__confirm__button").innerText = "인증완료"
    alert("인증이 완료되었습니다.")

    document.getElementById("signup__button").style = "background-color: #FFFFFF; color: #0068FF; border: 1px solid #0068FF ;cursor: pointer;"
    document.getElementById("signup__button").removeAttribute("disabled")
}





function signup(){
    const email = document.getElementById("email").value
    const writer = document.getElementById("writer").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value

    const location = document.getElementById("location").value

    const genderWoman = document.getElementById("gender__woman").checked
    const genderMan = document.getElementById("gender__man").checked

    let isValid = true
    if(email.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__email").innerText = ""
    }

    if(writer === "") {
        document.getElementById("error__writer").innerText = "이름이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__writer").innerText = ""
    }

    if(password1 === ""){
        document.getElementById("error__password1").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__password1").innerText = ""
    }

    if(password2 === ""){
        document.getElementById("error__password2").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__password2").innerText = ""
    }

    if(password1 !== password2) {
        document.getElementById("error__password1").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("error__password2").innerText = "비밀번호가 일치하지 않습니다."
        isValid = false
    }



    if(location !== "서울" && location !== "경기" && location !== "인천"){
        document.getElementById("error__location").innerText = "지역을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__location").innerText = ""
    }



    if(genderWoman === false && genderMan === false){
        document.getElementById("error__gender").innerText = "성별을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__gender").innerText = ""
    }


    // 각 각 조건이 하나라도 안맞으면 isValid가 false이므로 가입승인이 되지 않는다
    if(isValid === true){
        alert("코드캠프 가입을 축하합니다.")
    }
}