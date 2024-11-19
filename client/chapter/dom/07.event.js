/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler(e) {
  console.log(e);
  console.log('안녕');
}

// 2. DOM 프로퍼티 : element.onclick = handler

const about = getNode('.about');
const home = getNode('.home');
// about.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])

about.addEventListener('click', handler);

const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;
}

ground.addEventListener('click', handleBall);

function handleMove({ offsetX: x, offsetY: y }) {
  // const x = e.offsetX;
  // const y = e.offsetY;
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;

  // ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;
  const template = `
    <div class="emotion" style="top:${y}px; left:${x}px">💩</div>
  `;
  insertLast(ground, template);
}

ground.addEventListener('mousemove', handleMove);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener

// - removeEventListener

const input = getNode('input');
function handleInput() {}
input.addEventListener('input', handleInput);
