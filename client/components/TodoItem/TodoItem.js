import { TodoService as s } from '../../service/TodoService.js';

const todoItemTemplate = document.createElement('template');

todoItemTemplate.innerHTML =
  /* html */
  `
  <style>@import url('./components/TodoItem/TodoItem.css');</style>
  <li class="item">
    <input type="checkbox">
    <div class="content">
      <input type="text">
    </div>
    <button type="button" class="delete-item">x</button>
  </li>
`;

export class TodoItem extends HTMLElement {
  constructor(id, value, checked) {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    this.item = this.shadowRoot.querySelector('.item');
    this.checkbox = this.item.querySelector('input[type="checkbox"]');
    this.contentInput = this.item.querySelector('input[type="text"]');
    this.deleteButton = this.item.querySelector('.delete-item');

    this.id = id;
    this.contentInput.value = value;
    this.checkbox.checked = checked;

    if (checked) {
      this.contentInput.classList.add('done');
    }
    //console.log(id, value, checked);
  }

  connectedCallback() {
    this.contentInput.value = 'TASK' + this.id;
    this.deleteButton.addEventListener('click', () => this.handleDelete());
    this.checkbox.addEventListener('click', () => this.handleToggleChecked());

    s.AddTodoItem(this.id, this.contentInput.value, this.checkbox.checked);
  }

  handleDelete() {
    this.remove(this);
    s.RemoveTodoItem(this.id);
  }

  handleToggleChecked() {
    if (this.checkbox.checked) {
      this.contentInput.classList.add('done');
    } else {
      this.contentInput.classList.remove('done');
    }
    s.CheckTodoItem(this.id, this.checkbox);
  }
  render() {
    this.shadowRoot.append(todoItemTemplate.content.cloneNode(true));
  }
}
