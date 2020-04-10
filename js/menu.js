
'use strict'
var show = document.getElementById('show');
var hide = document.getElementById('hide');

show.addEventListener('click', ()=>{
  document.body.className = 'menu-open';
});

hide.addEventListener('click', ()=>{
  document.body.className = '';
});
