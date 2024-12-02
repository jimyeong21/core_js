import { LitElement, html } from "lit";

class NameTag extends LitElement {
  static properties = {
    checked: {},
    value: {},
  };
  constructor() {
    super();
    this.checked = false;
    this.value = "hello";
  }

  setChecked(e) {
    this.checked = e.target.checked;
  }

  render() {
    return html/* html */ `
      <div>
        <input type="text" .value=${this.value} ?disabled=${this.checked} />
      </div>
      <label>
        <input type="checkbox" name="" id="checkbox" @change=${this.setChecked} />
      </label>
    `;
  }
}

customElements.define("name-tag", NameTag);
app.append(document.createElement("name-tag"));
