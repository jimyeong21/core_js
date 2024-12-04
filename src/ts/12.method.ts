const arr = [1, 2, 3];

// arr.map((n) => n * 2);

function map<T, U>(arr: T[], callback: (n: T) => U): U[] {
  const result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (n) => n * 2);

function foreach<T, U>(arr: T[], callback: (n: T) => U) {}

foreach(arr, (n) => {
  console.log(n);
});
