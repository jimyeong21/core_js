export class TodoService {
  static state = [];

  static initializedState(state) {
    this.state = state;
  }

  static AddTodoItem(id, value, checked) {
    this.state.push({
      id,
      value,
      checked,
    });
  }

  static DeleteTodoItem(id) {
    const t = this.state.filter((t) => t.id !== id);
  }

  static CheckTodoItem() {}

  static UpdateTodoItem(id, value) {}
}
