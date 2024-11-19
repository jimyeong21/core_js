/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', () => {
  console.log('section');
});
// section.addEventListener('click', () => {
//   console.log('article');
// });
// section.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('p');
// });
/* 캡처링 ----------------------------------------------------------------- */
