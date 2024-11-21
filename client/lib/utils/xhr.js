const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// [readyState]
// 통신의 상태를 자세하게 나타내준다.
// 0 : uninitialized -> 초기화가 되지 않은 상태, 요청보내지 않음
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete

function xhr({ method = 'GET', url = '', success = null, fail = null, body = null, headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } } = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (!method === 'DELETE') {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  xhr.addEventListener('readystatechange', () => {
    const { status, response, readyState } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);
        success(data);
      } else {
        fail({ message: '알 수 없는 오류가 발생했습니다.' });
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

const obj = {
  name: 'tiger',
  age: 38,
};

// xhr({
//   url: END_POINT,
//   success: () => {},
//   fail: () => {},
// });

xhr.get = (url, success, fail) => {
  xhr({
    url,
    success,
    fail,
  });
};

xhr.post = (url, body, success, fail) => {
  xhr({
    method: 'POST',
    url,
    body,
    success,
    fail,
  });
};
