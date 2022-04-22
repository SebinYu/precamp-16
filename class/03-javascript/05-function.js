
let isStarted = false

const pressedBtn = () => {


    if(isStarted === false){
    // isStarted가 false일 경우 (타이머가 작동 중이 아닐경우) => 코드 실행
        // 실행될 때 isStarted를 ture로 할당
        // 타이머가 종료되면 isStarted를 false로 재할당
        isStarted = true;
        
        const token = String( Math.floor(Math.random( ) * 1000000) ).padStart(6, "0")
        // 핵스코드 = 컬러 인덱스
        document.getElementById('token').style.color = "#" + token 
        document.getElementById("token").innerText = token
    
    
        // 인증번호 전송 직후, setInterval 함수를 통해 3분 타이머 실행
        let time = 1;
        let timer = null;
        

        // 함수를 변수에 저장가능
        timer = setInterval(function(){
            if(time >= 0) {
                const min = String( Math.floor( time/60 ) ).padStart(2, "0")
                const sec = String(time%60).padStart(2, "0")
                // console.log는 문자열을 보내주지 않는다_ 문자열 출력 실행을 하게끔하는 명령어 
                // 만약 문자열을 변수에 저장하고 싶다면, 문자열 자체만 할당값으로 둔다
                // 문자열, 변수를 한번에 string으로 출력원할 시 백틱(`),변수형태(${변수}) 2가지를 활용한다
                let realtime = `${min}  :  ${sec}`
                document.getElementById("realtime").innerText = realtime
                time = time - 1
            }else {
                // else if문을 바로 사용하기보다는, else를 사용할 수 있는지 구분 1차로 고려하기
                document.getElementById("authentication_end").disabled = true;        
                isStarted = false;
                console.log("타이머 동작중")
                // 매개변수로 이어진 timer를 clearInterval로 지워준다
                clearInterval(timer)
            }
        },1000)
    

    } else {
        // isStarted가 true일 경우 (타이머가 작동 중일 경우) => 코드 실행 X
        console.log("타이머가 이미 동작중입니다")
    }


    
}

