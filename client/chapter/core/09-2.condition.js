/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB;

// 논리합(또는) 연산자
let AorB;

// 부정 연산자
let reverseValue;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy;

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;

function login() {
  let userName = prompt('누구십니까?');

  // if(userName === null || userName === undefined) return
  // if(!userName) return

  if (userName.toLowerCase() === 'admin') {
    let password = prompt('비밀번호를 입력해주세요');

    if (password.toUpperCase() === 'MASTER') {
      console.log('로그인 성공');
    } else if (password === null) {
      console.log('취소됐습니다.');
    } else {
      console.log('잘못된 정보를 입력하셨습니다.');
      login();
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('취소됐습니다.');
  } else {
    console.log('제대로된 값을 입력해주세요');
  }
}

login();
