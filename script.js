"use strict"
$(document).ready(function(){


  var buttons = $('.btn');
  var cubes =[ 1,2,3,4];
  var counter = 0;
  var cont = $('#cont');
  var newPat = $('#pat');
  var arrRnd = [];
  var test = [];
  var score = 0;
  var scoreDisplay = $('#score');
  var status = $('#status');
  var restart = $('#try');


  // use to keep function clean no math needed inside the function
  function rndRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (var i = 1; i<cubes.length+1; i++) {
    $('.btn:nth-child(' + i +')').append(i);
  }



  var tracker = [];
  var count = 0;


// keeps tracks of what user has clicked and lets them know if they are right or wrong.
// keeps track of the score once a pattern has been completed they recieve one point
// amination for you won
  buttons.click(function(event) {

  tracker.push(Number($(this).text()));
  for (var i = 0; i < tracker.length; i++) {
    if ((tracker.toString() === arrRnd.toString()) && (tracker.length === arrRnd.length)){
      status.text('Status: Good Job!!!!');
      score++;
      scoreDisplay.text('Score: ' + score);
      tracker = [];
      if (score === 1){
        status.text('YOU WON!!!!!!!!!');
        status.animate({'font-size':'40px'},100);
        status.animate({'margin-left':'40px'},100);
        status.animate({'margin-left':'0px'},100);
        status.animate({'margin-left':'40px'},100);
        status.animate({'margin-left':'0px'},100);
      }
    }
    if ((tracker.toString() !== arrRnd.toString()) && (tracker.length === arrRnd.length)){
      status.text('Status: Try Again');
      restart.css('display','inline-block');
    }
  }
    console.log(tracker);
    // goes pack to when the game first started  (restart of game)
  restart.click(function(event){
    location.reload();
  })
});


  // used to create a random pattern that spits out four numbers and after that adds one more
    var pattern = function(num){
         for (var i = 0; i<num; i++){
          arrRnd.push(rndRange(1,4));
        }
        $('#pat').text('Pattern: ' + arrRnd);
    }
  cont.click(function(event){
    if (counter === 0){
      pattern(4);
      counter++;
    }
    else {
      pattern(1);
      counter++;
    }
      console.log(arrRnd);
 });


});










