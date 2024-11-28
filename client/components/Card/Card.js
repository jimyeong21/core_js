export class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.state = {
      showImage: this.getAttribute('show-image') || 'true',
    };
    this.render();
  }

  static get observedAttributes() {
    return ['show-image'];
  }

  attributeChangeCallback(name, oldValue, newValue) {
    if (name === 'show-image') {
      this.state.showImage = newValue;
      this.render();
    }
  }

  render() {
    this.shadowRoot.innerHTML =
      /* html */
      ` 
      <style>

        @import url('./components/Card/Card.css');
      </style>
      <div class="card">
        <figure>
          <img src='' alt=''>
          <figcaption class="a11y-hidden">나뭇가지</figcaption>
        </figure>
        <h2>Card Title</h2>
      </div>
    `;
  }
}
