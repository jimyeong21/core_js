import "/src/style/style.css";
import { getNode, insertLast } from "kind-tiger";
import santa from "/src/assets/santa.png";
import { btn } from "/src/style/style.module.css";

const app = getNode("#app");

const template =
  /* html */
  `
  <figure class="container">
    <img style="width:30vh" src="${santa}" alt="">
    <figcaption>산타모자쓴 호랑이</figcaption>
  </figure>
  <button type="button" class="${btn}">BUTTON</button>
`;
insertLast(app, template);
