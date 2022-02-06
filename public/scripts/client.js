$(document).ready(onReady);
let firstButton 
const myTimeout = setTimeout(appendPic, 2000);


function onReady() {
    $('#add-button').on('click', addClick);
    $('#subtract-button').on('click', subtractClick);
    $('#multiply-button').on('click', multiplyClick);
    $('#divide-button').on('click', divideClick);
    $('#equal-button').on('click', equalClick);
    $('#clear-button').on('click', clearClick);
}


function addClick(){
    // console.log('add button!');
    firstButton = '+'
}
function subtractClick(){
    // console.log('subtract button!');
    firstButton = '-'
}
function multiplyClick(){
    // console.log('multiply button!');
    firstButton = '*'
}
function divideClick(){
    // console.log('divide button!');
    firstButton = '/'
}
function equalClick(){
    secondButton = '='
    addItem();
    $('#num1-input').val('');
    $('#num2-input').val('');
}
function clearClick(){
    console.log('clear button!');
    $('#num1-input').val('');
    $('#num2-input').val('');
}

function addItem() { 
    if($('#num1-input').val() && firstButton && $('#num2-input').val()){
    $.ajax({
      method: 'POST', 
      url: '/equation',  
      data: { 
            inputOne: $('#num1-input').val(),
            operator: firstButton,          
            inputTwo: $('#num2-input').val(),
            equals: '=',
            total: ''
      }
    }).then(function(response){
        // console.log('information sent from server!')
        getinventory();
    }).catch(function(response){
        console.log('no catch', response);
    })}else if($('#num1-input').val('') && $('#num2-input').val('')){
        // console.log('provide inputs plz')
        alert("Hello! I am an alert box!!");
        alert("You should've included a input value");
        alert("Maybe take a break, go for a walk or something");
}}

function getinventory() {
   
    $.ajax({
      method: 'GET',
      url: '/equation',
    }).then(function(response) { 
        // console.log("SUCCESS!!!", response);
        appendHistory(response);
        appendTotal(response);
    }).catch(function(response) {
        alert('Request failed. Try again later.');
      }
    );
    function appendHistory(arr) { // response from .then
        $('#calc-history').empty();
        for (let item of arr) { // item is one of the objects in the array
            $('#calc-history').append(`
            <li>${item.inputOne} ${item.operator} ${item.inputTwo} ${item.equals} ${item.total}</li>
            `);
        }
      }
    function appendTotal(total) {
        $('#output').empty();
        // console.log('displaying total',total[total.length-1].total) 
        $('#output').append(` <h2>${total[total.length-1].total}</h2> `)  
    }
}

function appendPic(){
   
    $('#picture-palace').append(`<img src="https://sayingimages.com/wp-content/uploads/didnt-know-funny-math-memes.jpg" width="200" height="200">`)
}
