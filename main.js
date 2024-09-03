'use strict'
const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const a = document.querySelector('a');
a.addEventListener('click',(e)=> {
    if (!username.value) {
        e.preventDefault()
        alert('please insert username')
    }
    if(!password.value){
        e.preventDefault()
        alert('please insert password')
    }
})

