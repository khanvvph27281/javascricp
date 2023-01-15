'use strict';
const restauant = {
    name: 'classico Italiano',
    location: 'Via Angelo tavanti 13 ,Firenze ,Italy',
    categories: ['Italian', 'Pizzeria', 'Vagetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Brushetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order :function(starterIndex,mainIndex){
        return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    }
};
const arr=[2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let[main, ,secondary]=restauant.categories;
console.log(main,secondary);
//  const temp=main;
//  main=secondary;
//  secondary=temp;
//  console.log(main,secondary)
[main,secondary]=[secondary,main];
 console.log(main,secondary);

 const [starter,mainCourse]=restauant.order(2,0);
 console.log(starter,mainCourse);

 //hủy nồng nhau
const nested=[2,4,[5,6]];
//  const[i,j]=nested;
const[i,j,k]=nested;
 console.log(i,j,k);
 //
 const[p=1,q=1,r=1]=[8,9];
 console.log(p,q,r);
