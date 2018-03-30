var count = 100;

var right = $('#correct');
var wrong = $('#incorrect');
var clock = false;



$(document).ready(function(){
  
  var $timer = $('#timer');
  $timer.text(count);

  var counter = setInterval(function(){
    clock = true;
    count--;
    $timer.text(count);
    if(count === 0){
      clearInterval(counter);
    }
  },1000);
});



// $(mytime).html(count);

// setInterval(timeIt, 1000);

// if (count == 0){
//    done();
// }


// function timeIt() {
//     if (count > 0){
//         count--;
//         console.log(count);
//         $(mytime).html(count);
        
//     }
// }

// function quiz(params) {
// $(".timer").text("0.0")
// setInterval(function(){ 
//     time--;
//     $("#timer").append(time);
//     }, 1000);
// }