const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas, esse natus blanditiis alias, eaque omnis ea veritatis non maxime eos libero! Provident nam nesciunt ipsam soluta alias ducimus. Fugit.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
  const listItem = document.createElement('li');
  const listContent = prompt('Favorite color?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(event) {
    event.stopPropagation();
    const listContent = prompt('Change your color');
    this.textContent = listContent;
  };
}