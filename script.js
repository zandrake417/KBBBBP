document.querySelectorAll('*').forEach(element => {
    element.style.border = '2px solid #000000'; // Mengubah border menjadi hitam pekat
});
const anchor = document.querySelector('a');
anchor.href = 'https://www.google.com';

const div1 = document.querySelector('#container1');
const div2 = document.querySelector('#container2');

if (div1) container1.style.backgroundColor = '#ffcccb';
if (div2) container2.style.backgroundColor = '#add8e6';

const listItems = document.querySelectorAll('li');
listItems.forEach((li, index) => {
    li.style.backgroundColor = 'gray';
    li.textContent = `List baru ${index + 1}`;
});