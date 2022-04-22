const changeFocus1 = () => {

    const p1 = document.getElementById("p1").value;
    if(p1.length === 3){
        // p1 -> p2의 input 박스로 포커스를 넘기기
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = () => {

    const p2 = document.getElementById("p2").value;
    if(p2.length === 4){
        document.getElementById("p3").focus()
    }


}