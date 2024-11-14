// function getVote() {
//   let count = 0;
//   for (let name of arguments) {
//     if (name === '혜원') {
//       count++;
//     }
//   }

//   return `혜원이가 총 ${count} 표로 반장이 되었습니다.`;
// }
// console.log(getVote('혜원', '원범', '혜원'));

// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// let countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++;
//   } else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

// console.log(countedNames);

function getVote(...names) {
  const voteCount = {};

  names.forEach((name) => {
    if (!voteCount[name]) {
      voteCount[name] = 0;
    }
    voteCount[name]++;
  });

  let result = '';
  for (const [name, count] of Object.entries(voteCount)) {
    result += `후보: ${name} 득표: ${count}\n`;
  }

  return result.trim();
}

// console.log(getVote('Hye-won', 'Ji-hoon', 'Hye-won', 'Min-seo', 'Ji-hoon'));
