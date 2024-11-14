class Todo {
  constructor({ input, button, renderPlace }) {
    // 구조분해할당, 파라미터에서 진행
    //const { input, button, renderPlace } = obj;
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.attachEvent();
  }

  get currentInputTodoData() {
    return this.input.value;
  }
  set currentInputTodoData(value) {
    this.input.value = value;
  }

  addTodoData() {
    this.todoListArray.push(this.currentInputTodoData);
  }

  createTag() {
    return `<li>${this.currentInputTodoData}</li>`;
  }
  #render() {
    this.renderPlace.insertAdjacentHTML('beforeend', this.createTag());
    this.input.value = '';
  }
  handleClick() {
    console.log(this.currentInputTodoData);
    this.#render();
  }

  //버튼에 이벤트 등록 input 값이 콘솔창에 나올 수 있도록
  attachEvent() {
    // 나를 호출한 대상을 this로가져오므로 this는 button이 된다.
    // 이를 수정하기 위해 화살표함수 혹은 bind를 쓴다.
    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.addTodoData();
      this.handleClick();
    });
  }
}

const todo = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todoList',
});
