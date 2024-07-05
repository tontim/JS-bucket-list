//Container
const container = document.createElement('div');
container.style.fontFamily = "Roboto, sans-serif";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.height = "100vh";
//Logo
const logo = document.createElement('h1');
logo.textContent = 'Logo';

//Bucket list title
const bucketListTitle = document.createElement('h1');
bucketListTitle.textContent = 'Bucket List';
bucketListTitle.style.fontSize = '3rem';

const lineBreak = document.createElement('hr');
lineBreak.style.width = '50%';
lineBreak.style.margin = '20px 0';

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
container.appendChild(lineBreak);
container.appendChild(description);
container.appendChild(list);

// container to body
document.body.appendChild(container);