// 값이 입력되었는지를 판단하는 함수
const checkValidation = () => {
    console.log("함수 작동됨")
    // 이메일의 값을 가져와 변수에 할당
    const email = document.getElementById
    // 비밀번호의 값을 가져와 변수에 할당
    const pw1 = document.getElementById("pw1").value
    // 비밀번호 확인의 값을 가져와 변수에 할당
    const pw2 = document.getElementById("pw2").value

    // 3개 변수애 담긴 값이 비어있지 않을 때 버튼을 활성화
    // 하나라도 비어있다면 버튼을 비활성화

    // [email != "" ]는 빈 문장열이 아닐때를 가정
    // 하지만 위와 같이 적지 않아도, "참같은 값" = 어떤 0/null이 아닌 값 이 있다면, 자동으로 true로 인식시킨다
    if(email  && pw1  && pw2 ){
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").setAttribute("style", "background-color: yellow")
    } else {
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").setAttribute("style", "background-color: none")
    }
}