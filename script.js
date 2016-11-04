"use strict"
$(document).ready(function(){


  var buttons = $('.btn');
  var cubes =[ 1,2,3,4];
  var counter = 0;
  var user = [ ];
  var startGame = $('#start');
  var newPat = $('#pat');
  var arrRnd = [];

  function rndRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (var i = 1; i<cubes.length+1; i++) {
    $('.btn:nth-child(' + i +')').append(i);
  }

  buttons.click(function(event) {
    console.log("hello")
    $(this).toggleClass('active');
    for(var i=0; i < arrRnd.length; i++) {

    }
    //if()
  });


  // buttons.click(function(event) {
  //   this.style.backgroundColor = 'purple';
  // });

  startGame.click(function(event){
  while (arrRnd.length < 4){
    var rndnumber = rndRange(1,4);
    if(arrRnd.indexOf(rndnumber) > 1) continue;
    arrRnd[arrRnd.length] = rndnumber;
    newPat.append(rndnumber);
  }
 });
console.log();


  //  startGame.click(function(event) {
  //   var rndnumber = rndRange(1,4);
  //   for (var i = 1; i <cubes.length; i++);
  //   newPat.append(rndnumber);
  // });

});

// var selectPat = function(){
//   var rndPat = rnd(0,4)
//   $('footer').text('here we go! ')
//   $('#key').text(' the sequence is' + rndPat )
// };

// console.log(selectPat())
//  });





// change the order of buttons once the player  has passed a level
// add a timer
// increase the pattern by 1
// createtwo functions and call the second function inside the 1st one
// make the game more challenging.


// var cube = document.querySelectorAll ('.zone');
// var counter = 0


// for (var i= 0; i <cube.length; i++){
//     cube[i].onmouseover = function() {
//     this.className += ' green';
//     };

//   cube[i].onmouseout = function() {
//     this.className = ' zone';
//      };

//   cube[i].onclick = function() {
//     this.style.backgroundColor = ' green';
//     // counter++ counts the zones that have already been clicked
//     counter++;

//     if( counter == cube.length){
//       console.log("Congradulations!")
//         };
//     }
// };
