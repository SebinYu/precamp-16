Math.floor(Math.random( ) * 1000000)
// 

//padStart: 6자리 숫자 이하로 랜덤 수가 결정된다면, 앞에0 패딩 추가
String( Math.floor(Math.random( ) * 1000000) ).padStart(6, "0")
// '089325'

const token = String( Math.floor(Math.random( ) * 1000000) ).padStart(6, "0")
// undefined
token
// '405264'
token
// '405264'