import { TodoItem } from '../TodoItem/TodoItem.js';

const todoTemplate = document.createElement('template');

todoTemplate.innerHTML =
  /* html */
  `
  <style>@import url(./components/TodoList/TodoList.css);</style>
<div class="container">
  <h1>TO DO LIST <img src="../assets/checklist.png"></h1>
  <ul class="todo"></ul>
  <button type="button" class="add-item"> + </button>
</div>
`;

export class TodoList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    this.container = this.shadowRoot.querySelector('.container');
    this.todo = this.container.querySelector('.todo');
    this.addButton = this.container.querySelector('.add-item');
  }

  connectedCallback() {
    this.addButton.addEventListener('click', () => this.handleAddClick());
  }

  handleAddClick() {
    const todoItem = new TodoItem(Date.now(), '', false);
    this.todo.append(todoItem);
  }

  render() {
    this.shadowRoot.append(todoTemplate.content.cloneNode(true));
  }
}
