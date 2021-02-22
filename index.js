console.log('what up yo!')

const get = id => document.getElementById(id);

// get('new-list-item').addEventListener('click', () => {
//   console.log('firing whenever I click!')
// })

const myFunction = () => {
  const textInput = get('item-input');
  const textnode = document.createTextNode(textInput.value);
  const li = document.createElement('LI');
  li.appendChild(textnode)
  get('myList').appendChild(li);
  textInput.value = '';
}

const makeApiCall = async () => {
  const data = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json()
  console.log("got the data!", data);
}
// .appendChild(li.setAttribute('innerHTML', 'Booya!'))
// function myFunction() {
//   var node = document.createElement("LI");
//   var textnode = document.createTextNode("Water");
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);
// }