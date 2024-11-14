/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

let ternaryTest = emailAddress === undefined || emailAddress === null ? (receivedEmailAddress = 'user@company.io') : (receivedEmailAddress = emailAddress);

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

function discoundPrice(userState, count, price) {
  if (count === 1 && userState === '일반회원') {
    price * 0.95;
  } else if (userState === '일반회원' && count >= 2) {
    price * 0.9;
  } else if (userState === '프리미엄') {
    price * 0.8;
  }

  if (userState === '비회원' && count >= 2) {
    price * 0.95;
  }
}
