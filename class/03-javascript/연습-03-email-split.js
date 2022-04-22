//문자열 쪼개고- 쪼개진 문자열을 배열에 저장
const email = 'codecamp@gmail.com' // 입력받은 문자열을 변수에 할당
email.includes('@') // 메일 주소를 바르게 입력했는지 @기호를 찾습니다 -> true

email.split('@') // @기호를 기준으로 문자열을 분리 -> ['codecamp', 'gmail.com']
const userMail = email.split('@')[0] // @의 앞쪽(계정 정보)을 userMail이라는 변수에 할당
const company = email.split('@')[1] // @의 뒷쪽(메일 제공사)을 company라는 변수에 할당

// 이렇게 split과 인덱스를 이용하여 변수에 할당하면
userMail // 'codecamp'
company // 'gmail.com'
// 각 변수에 데이터가 할당된 것을 확인할 수 있습니다

// 그럼 userMail에 있는 문자열을 마스킹 해야 하는데, 마지막 4개의 글자를 마스킹하는 규칙이 있다고 가정합니다
//마스킹(Masking) 기법은 어떤 배열을 대상으로 하여 배열 내 모든 값들 중 특정한 조건을 만족하는 것들만 선별하는 기법입니다.
const maskingMail = []// 마스킹 된 결과물을 저장할 빈 배열을 만들어 변수에 할당하고
userMail[0] // 'c' 한글자씩 잡아와 봅시다

maskingMail.push(userMail[0]) // 마지막 4글자만 마스킹하기로 했으니 그전까지는 배열에 그대로 추가하고
maskingMail.push(userMail[1])
maskingMail.push(userMail[2])
maskingMail.push(userMail[3]) 
maskingMail // ['c', 'o', 'd', 'e'] 여기까지 하면 일단 정상적으로 배열에 들어갔죠?

// 이제 이 뒤 4글자는 마스킹해야 하는 규칙에 따라 별표로 바꾸어 배열에 담는다
maskingMail.push('*')
maskingMail.push('*')
maskingMail.push('*')
maskingMail.push('*')
maskingMail // ['c', 'o', 'd', 'e', '*', '*', '*', '*'] 그럼 우리가 의도했던 대로 계정이 가려졌다

// 이제 배열로 나뉘어진 문자를 하나로 합칠 차례. 우리는 join이라는 메소드를 사용할 수 있다.
maskingMail.join('@') // 'c@o@d@e@*@*@*@*' join은 각 인덱스 사이에 매개변수를 삽입하며 하나의 문자열로 합칩니다.
maskingMail.join('#') // 'c#o#d#e#*#*#*#*'
maskingMail.join('') // 'code****' 매개변수를 빈 문자열로 설정하면 배열을 이렇게 하나의 문자열로 합칩니다.

//그럼 메일주소들을 다시 합쳐줄 시간.
maskingMail.join('')+'@'+company // 'code****@gmail.com'

const result = maskingMail.join('')+'@'+company // 결과를 변수에 할당합니다
result // 'code****@gmail.com' 이제 result라는 변수에는 마스킹된 메일주소가 담겨있습니다.