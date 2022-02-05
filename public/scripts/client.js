$(document).ready(onReady);
// Let firstButton = 


function onReady() {
    $('#add-button').on('click', addClick);
    $('#subtract-button').on('click', subtractClick);
    $('#multiply-button').on('click', multiplyClick);
    $('#divide-button').on('click', divideClick);
    $('#equal-button').on('click', equalClick);
    $('#clear-button').on('click', clearClick);
}


function addClick(){
    console.log('add button!')
}
function subtractClick(){
    console.log('subtract button!')
}
function multiplyClick(){
    console.log('multiply button!')
}
function divideClick(){
    console.log('divide button!')
}
function equalClick(){
    console.log('equal button!')
}
function clearClick(){
    console.log('clear button!')
}







// function addItem() { 
//     $.ajax({
//       method: 'POST', 
//       url: '/equation',  
//       data: { 
//               inputOne: $('#num-one').val(),
//               inputTwo: $('#num-two').val(),
//               operator: // this is where the button that was pressed will be assigned. 
//       }
//     }).then(function(response){
        

//     }).catch(function(response){
//         console.log('UUUUUHHHGGG', response);
//     })
// }