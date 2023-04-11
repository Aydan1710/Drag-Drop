"use strict";

let bo=document.querySelector('.bar');
let photo=document.querySelector('.nature');

photo.addEventListener('dragstart',()=>{
    photo.classList.add('active');
});

photo.addEventListener('dragend',()=>{
    photo.classList.remove('active');
});

frame.addEventListener('dragover',()=>{
    let select=document.querySelector('.active');
    frame.appendChild(select);
    document.querySelector('p').style.display='none';
});