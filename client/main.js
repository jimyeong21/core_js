import data from './data/data.js';
import { getNode as $, getRandom, insertLast, clearContents, typeError, addClass, removeClass, showAlert, isNumericString, shake, copy } from './lib/index.js';

const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');

function handleSubmit(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replaceAll(' ', '' === '')) {
    showAlert('.alert-error', '제대로된 이름 입력해주세요', 1200);
    shake(nameField);
    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '정확한 이름 입력해주세요', 1200);
    shake(nameField);
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = this.textContent;

  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료');
  });
}
document.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);
