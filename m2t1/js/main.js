'use strict';

const propsLists = document.querySelectorAll('.props__list');
// const propsItemsOne = document.querySelectorAll('.props__item_one');
const propsItemsTwo = document.querySelectorAll('.props__item_two');
// const propsItemsThree = document.querySelectorAll('.props__item_three');
const propsItemsFour = document.querySelectorAll('.props__item_four');
// const propsItemsFive = document.querySelectorAll('.props__item_five');
// const propsItemsSix = document.querySelectorAll('.props__item_six');

const items = document.querySelectorAll('.item');
items[4].before(items[0]);

const header2 = document.querySelector('li.item_two h2');
const header5 = document.querySelector('li.item_five h2');
const header6 = document.querySelector('li.item_six h2');
[header2.textContent, header5.textContent, header6.textContent] =
  [header5.textContent, header6.textContent, header2.textContent];

propsItemsFour[4].before(propsItemsFour[5]);
propsItemsTwo[7].after(propsItemsTwo[8]);
propsItemsTwo[8].after(propsItemsTwo[9]);

const header3 = document.querySelector('li.item_three h2');
header3.after(propsLists[4]);
header5.after(propsLists[3]);

const ads = document.querySelector('.ads');
ads.remove();
