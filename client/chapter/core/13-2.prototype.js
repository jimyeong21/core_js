/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// object literal -> function constructor -> class syntax

class Animal {
  // public class field
  // 변수 받을 수 없고 재할당 안됨
  leg = 4;
  tail = true;

  // private field
  // 밖에서 접근할 수 없는 변수 설정, 캡슐화
  // #name = 'unknown';

  constructor(name) {
    // 최초 1회만 실행된다. -> 초기화할 때 많이 사용함.
    this.name = name;
    this.stomach = [];
    // this.leg = 4;
    // this.tail = true;
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

class Tiger extends Animal {
  constructor(name) {
    // Animal.call(this)와 같은 역할,
    // Animal의 constructor 같이 실행해줌
    super(name);
    this.pattern = '호랑이 무늬';
  }

  // instancs method
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  // static method
  static bark(sound) {
    return sound;
  }
}

//const a = new Animal('몽실이');
const 호랑이 = new Tiger('호돌이');

// class

class Button {
  constructor(selector) {
    this.button = document.querySelector(selector);
    this.count = 0;
    this.attachEvent();
  }
  handleClick() {
    console.log('click');
  }
  attachEvent() {
    this.button.addEventListener('click', this.handleClick);
  }
}

const button = new Button();

const _button = document.querySelector('.btn');

let count = 0;

function createTag() {
  return `<div>${++count + 'clicked'}</div>`;
}

function render(data) {
  document.body.insertAdjacentHTML('beforeend', data);
}

function handleClick() {
  render(createTag());
}

_button.addEventListener('click', handleClick);
