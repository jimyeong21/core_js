export class Counter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.state = {
      value: +this.getAttribute('data-value') || 0,
    };
    this.render();
  }

  static get observedAttributes() {
    return ['data-value'];
  }

  attributeChangedCallback() {}

  render() {
    const { value } = this.state;
    this.shadowRoot.innerHTML =
      /* html */
      `
    <style>@import url('./components/Counter/Counter.css');</style>
    <div>
      <button type="button" class="" aria-label="감소 버튼">-</button>
      <span>${value}</span>
      <button type="button" class="" aria-label="증가 버튼">+</button>
    </div>
  `;

    this.shadowRoot.querySelector('.increment').addEventListener('click', handleIncrement.bind(this));
  }
}
