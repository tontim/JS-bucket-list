//Container
const container = document.createElement('div');
container.style.fontFamily = "Roboto, sans-serif";

//Logo
const logo = document.createElement('h1');
logo.textContent = 'Logo';

//Bucket list title
const bucketListTitle = document.createElement('h2');
bucketListTitle.textContent = 'Bucket List';

//Description
const description = document.createElement('p');
description.textContent = 'My bucketlist!'

//List
const list = document.createElement('ul');

//Add list
const items = ['Code game', 'Become millionaire'];
items.forEach(itemText => {
    const item = document.createElement('li');
    item.textContent = itemText;
    list.appendChild(item);
});

//append all elements into container
container.appendChild(logo);
container.appendChild(bucketListTitle);
container.appendChild(description);
container.appendChild(list);

// container to body
document.body.appendChild(container);