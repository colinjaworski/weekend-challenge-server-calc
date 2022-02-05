$(document).ready(onReady);
let firstButton 
 

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
    addItem()
}
function clearClick(){
    // console.log('clear button!')
}

function addItem() { 
    $.ajax({
      method: 'POST', 
      url: '/equation',  
      data: { 
            inputOne: $('#num-one').val(),
            operator: firstButton,          
            inputTwo: $('#num-two').val(),
            equals: '=',
            total: ''
      }
    }).then(function(response){
        console.log('information sent from server!')

    }).catch(function(response){
        console.log('no catch', response);
    })
}