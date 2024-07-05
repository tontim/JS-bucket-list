//Container
const container = document.createElement('div');
container.style.fontFamily = "Roboto, sans-serif";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.height = "100vh";
container.style.gap = "10px";

//Logo
const logo = document.createElement('img');
logo.src = 'images/tonis.png';
logo.alt = 'tonis';
logo.style.width = '300px';

//Bucket list title
const bucketListTitle = document.createElement('h1');
bucketListTitle.textContent = 'Bucket List';
bucketListTitle.style.fontSize = '4rem';
bucketListTitle.style.margin = '0';

//First hr
const lineBreak = document.createElement('hr');
lineBreak.style.width = '55%';
lineBreak.style.margin = '0 0';
lineBreak.style.height = '4px';
lineBreak.style.background = 'black';

//Description
const description = document.createElement('p');
description.textContent = 'My bucketlist 5000!!'
description.style.fontSize = '2rem';
description.style.margin = '0 0';
description.style.padding = '2px';
description.style.background = 'rgb(182 180 255)';

//Second hr
const lineBreak2 = document.createElement('hr');
lineBreak2.style.width = '50%';
lineBreak2.style.margin = '0 0';
lineBreak2.style.height = '2px';
lineBreak2.style.background = 'black';

//List
const list = document.createElement('ul');

//Add list
const items = ['Code game', 'Become millionaire'];
items.forEach(itemText => {
    const item = document.createElement('li');
    item.textContent = itemText;
    item.style.fontSize = '1.4rem';
    list.appendChild(item);
});

//append all elements into container
container.appendChild(logo);
container.appendChild(bucketListTitle);
container.appendChild(lineBreak);
container.appendChild(description);
container.appendChild(lineBreak2);
container.appendChild(list);

// container to body
document.body.appendChild(container);