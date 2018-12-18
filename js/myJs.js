function openWindow() {
setTimeout(function() {
window.open("index.html", "_self");
}, 4000);
}

function show() {
var user = document.getElementById("userLogin").value;
var imageSource = ["images/coffe.png", "images/coffe.png"]
var greeting;
	
	var fullDate =  new Date();
	var month= fullDate.getMonth()+1;
	var day = fullDate.getDate();
	var year = fullDate.getFullYear();
	var time = fullDate;
    time = new Date().getHours();
    if (time < 12) {
        greeting = "Good morning ";
		var img =  '<img src="images/coffee.png" widht="60px" height="50px">';
		document.getElementById("theTime").innerHTML = ("Today is: "+month+":"+day+":"+year);
    } else if (time < 18) {
        greeting = "Good Afternoon ";
		var img =  '<img src="images/sun.png" widht="60px" height="50px">';
		document.getElementById("theTime").innerHTML = ("Today is: "+month+":"+day+":"+year);
    } else {
        greeting = "Good evening ";
		var img =  '<img src="images/moon.png" widht="60px" height="50px">'; 
		document.getElementById("theTime").innerHTML = ("Today is: "+month+":"+day+":"+year);
    }
    document.getElementById("msg").innerHTML = greeting + user.toUpperCase() +" "+ img;
	
	document.getElementById("loginBox").style.opacity = 0;
	
	openWindow();


	}

var slide = function(){
	
var imageSources = ["images/note8Black.png", "images/laptop.png", "images/tablet.png", "images/pc.png"];

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("slide").src = imageSources[index];
  index++;
} , 3000);


function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

}
}


	
var validateLogin = $('#sign').on("click", function(e){
	var user = $('#userLogin').val();
	user = user.replace(/\s*$/, "");
	var pass = $('#passLogin').val();
	pass = pass.replace(/\s*$/, "");
	var error = $('#errorLogin');
	if (user.length < 1 || pass.length < 1)
	{
		e.preventDefault();
		error.text ("Error, One of the entries is not valid");
		$('#userLogin').css('border-bottom', '2px solid red'); 
		$('#passLogin').css('border-bottom', '2px solid red'); 
		
		
	}
	else{
		e.preventDefault();
		error.text("");
		$('#userLogin').css('border-bottom', 'none'); 
		$('#passLogin').css('border-bottom', 'none');  
		show();
	}
	}); // End Event Listener validateFirst




