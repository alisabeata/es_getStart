// шаблонизация

const name_3 = 'SomeName';
const lastName_3 = 'SomeLastName';

const fullName_3 = `[${name_3}] [${lastName_3}]`;

console.log(fullName_3);


const listNames = [
  {name: 'Name1', lastName: 'lastName1'},
  {name: 'Name2', lastName: 'lastName2'},
  {name: 'Name3', lastName: 'lastName3'},
  {name: 'Name4', lastName: 'lastName4'},
  {name: 'Name5', lastName: 'lastName5'},
];

function renderList(list) {
  let res = '';
  
  list.forEach(friend => {
    res += `${friend.name} ${friend.lastName} `;
  });
  
  return res;
}

console.log(renderList(listNames));