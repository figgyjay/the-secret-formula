//form one
function myFunction() {
    document.getElementById("frm1").submit();
}

//form two
myContent = document.getElementById("content");
var sandWich = {
  pickle: false,
  lettuce: false,
  tomato: false,
  ketchup: false,
  mustard: false,
  mayo: false
}
var mySandwich = [];
function pickle(num) {
  if (num > 0) {
  sandWich.pickle = true;
  mySandwich.push("pickles");
  }
}
function lettuce(num) {
  if (num > 0) {
    lettuce.lettuce = true;
  	mySandwich.push("lettuce");
  }
}
function tomato(num) {
  if (num > 0) {
	sandWich.tomato = true;
  	mySandwich.push("tomato");
  }
}
function ketchup(num) {
  if (num > 0) {
	sandWich.ketchup = true;
  	mySandwich.push("ketchup");
  }
}
function mustard(num) {
  if (num > 0) {
	sandWich.mustard = true;
 	mySandwich.push("mustard");
  }
}
function mayo(num) {
  if (num > 0) {
	sandWich.mayo = true;
  	mySandwich.push("and pickles.");
  } 
   else {
  	mySandwich.push("and no pickles.");
  }
}
function makeASandwich(pickles, lettuces, tomatos, ketchups, mustards, mayos) {
  pickle(pickles), lettuce(lettuces), tomato(tomatos), ketchup(ketchups), mayo(mayos);
  myContent.innerHTML = mySandwich.toString();
}
var myIngredients = document.getElementById('value').value;
makeASandwich(myIngredients);

//form three
var time;
var day;
var month;
var year;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var center;

// remove border if the selected date is today's date
function todayEqualActive(){
  setTimeout(function(){
    if($(".ui-datepicker-current-day").hasClass("ui-datepicker-today")){
      $(".ui-datepicker-today")
        .children(".ui-state-default")
        .css("border-bottom", "0");
    }
    else{
      $(".ui-datepicker-today")
        .children(".ui-state-default")
        .css("border-bottom", "2px solid rgba(53,60,66,0.5)");
    }
  }, 20);
}

// call the above function on document ready
todayEqualActive();

$('#calendar').datepicker({
  inline: true,
  firstDay: 1,
  showOtherMonths: true,
  onChangeMonthYear: function(){
    todayEqualActive();
  },
  onSelect: function(dateText, inst){
    var date = $(this).datepicker('getDate'),
    day  = date.getDate(),
    month = date.getMonth() + 1,
    year =  date.getFullYear();
    
    // display day and month on submit button
    var monthName = months[month - 1];
    $(".request .day").text(monthName + " " + day);
    
    todayEqualActive();    

    $(".request").removeClass("disabled");
    
    var index;
    
    setTimeout(function(){
       $(".ui-datepicker-calendar tbody tr").each(function(){
        if($(this).find(".ui-datepicker-current-day").length){
          index = $(this).index() + 1;
        }
      });
      
      // insert timepiker placeholder after selected row
      $("<tr class='timepicker-cf'></tr>")
          .insertAfter($(".ui-datepicker-calendar tr")
          .eq(index));
      
      var top = $(".timepicker-cf").offset().top - 2;
      
      if($(".timepicker").css('height') == '60px'){
        $(".timepicker-cf").animate({
          'height': '0px'
        }, { duration: 200, queue: false });
        $(".timepicker").animate({
          'top':top
        }, 200);
        $(".timepicker-cf").animate({
          'height': '60px'
        }, 200);
      }
      else{
        $(".timepicker").css('top',top);
        $(".timepicker, .timepicker-cf").animate({
          'height': '60px'
        }, 200);
      }
    }, 0);
    
    // display time on submit button
    time = $(".owl-stage .center").text();
    $(".request .time").text(time);
    
    $(".owl-item").removeClass("center-n");
    center = $(".owl-stage").find(".center");
    center.prev("div").addClass("center-n");
    center.next("div").addClass("center-n");
  }
});

// if the inputs arent empty force ":focus state"
$(".form-name input").each(function(){
  $(this).keyup(function() {
    if (this.value) {
      $(this).siblings("label").css({
        'font-size': '0.8em',
        'left': '.15rem',
        'top': '0%'
      });
    }
    // remove force if they're empty
    else{
      $(this).siblings("label").removeAttr("style");
    }
  });
});

$(".timepicker").on('click', '.owl-next', function(){
  time = $(".owl-stage .center").text();
  $(".request .time").text(time);
  
  $(".owl-item").removeClass("center-n");
  center = $(".owl-stage").find(".center");
  center.prev("div").addClass("center-n");
  center.next("div").addClass("center-n");
});

$(".timepicker").on('click', '.owl-prev', function(){
  time = $(".owl-stage .center").text();
  $(".request .time").text(time);
  
  $(".owl-item").removeClass("center-n");
  center = $(".owl-stage").find(".center");
  center.prev("div").addClass("center-n");
  center.next("div").addClass("center-n");
});

$('.owl').owlCarousel({
  center: true,
  loop: true,
  items: 5,
  dots: false,
  nav: true,
  navText: " ",
  mouseDrag: false,
  touchDrag: true,
  responsive: {
    0:{
      items:3
    },
    700:{
      items:5
    },
    1200:{
      items:7
    }
  }
});

$(document).on('click', '.ui-datepicker-next', function(e){
  $(".timepicker-cf").hide(0);
  $(".timepicker").css({
    'height': '0'
  });
  e.preventDefault();
  $(".ui-datepicker").animate({
    "-webkit-transform":"translate(100%,0)"
  }, 200);
});

$(document).on('click', '.ui-datepicker-prev', function(){
  $(".timepicker-cf").hide(0);
  $(".timepicker").css({
    'height': '0'
  });
  $(".ui-datepicker").animate({
    'transform': 'translateX(-100%)'
  }, 200);
});

$(window).on('resize', function(){
  $(".timepicker").css('top', $(".timepicker-cf").offset().top - 2);
});

//sign in form//

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}








