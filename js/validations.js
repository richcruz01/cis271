$(document).ready(function () {
function openWindow() {
setTimeout(function() {
window.open("signIn.html", "_self");
}, 4000);
}	
	
	
	$('#submit').hide();
	$('#icon1').hide();
	$('#icon2').hide();
	//$('#passInfo').hide();
	$('#first').focus();
	
	function show() {
var user = document.getElementById("user").value;
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
	
/* ***************************************************** 
	// Event Listener to validate First Name
***************************************************** */

	var validateFirst = $('#first').on("blur", function(){
	var first = $('#first').val();
	first = first.replace(/\s*$/, "");
	if (first.length < 4 || first.length > 25 || $.isNumeric(first) || first.length < 1)
	{
		var error = document.getElementById("error");
		error.textContent = "Error, First Name is not a valid entry";
		$('#first').css('border-bottom', '2px solid red'); 
		$('#first').focus();
		
	}
	else{
		var error = document.getElementById("error");
		error.textContent = "";
		$('#first').css('border-bottom', 'none'); 
		
	}
	}); // End Event Listener validateFirst

/* ***************************************************** 
	// Event Listener to validate Last Name
***************************************************** */

	var validateSecond = $('#second').on("blur", function(){
	var second = $('#second').val();
	second = second.replace(/\s*$/, "");
	if (second.length < 4 || second.length > 25 || $.isNumeric(second) || second.length < 1)
	{
		var error = document.getElementById("error");
		error.textContent = "Error, Last Name is not a valid entry";
		 $('#second').css('border-bottom', '2px solid red'); 
		 $('#second').focus();
		
		
	}
	else{
		var error = document.getElementById("error");
		error.textContent = "";
		$('#second').css('border-bottom', 'none');
		return true;
	}
	}); // End Event Listener validateSecond

/* ***************************************************** 
	// Event Listener to validate Email
***************************************************** */ 
	 var ValidateEmail = $('#email').on("blur", function() {
        var criteria = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,5})?$/;
		var email = $('#email').val();
        
    
        if ((email.length < 5) || (!(email.match(criteria)))) {
            var error = document.getElementById("error");
			error.textContent = "Error, The email is not valid";
			$('#email').css('border-bottom', '2px solid red'); 
			$('#email').focus();
			return false;
        }
        else {
            var error = document.getElementById("error");
			error.textContent = "";
			$('#email').css('border-bottom', 'none');
			return true;
        }
   	
	 }); // End of validateEmail
	 
/* ***************************************************** 
	// Event Listener to validate User Name
***************************************************** */
	var validateUser = $('#user').on("blur", function(){
	var user = $('#user').val();
	user = user.replace(/\s*$/, "");
	if (user.length < 4 || user.length > 12 || $.isNumeric(user) || user.length < 1)
	{
		var error = document.getElementById("error");
		error.textContent = "Error, User Name is not a valid entry";
		$('#user').css('border-bottom', '2px solid red'); 
		$('#user').focus();
	}
	else{
		var error = document.getElementById("error");
		error.textContent = "";
		$('#user').css('border-bottom', 'none');
		
	}
	}); // End Event Listener validateUser

/* ***************************************************** 
	// Event Listener to validate password
***************************************************** */
	
	
		 // Sow password requirements
		 var show = $('#pass').on("focus", function() {
			$('#passInfo').show();
			$('#icon1').show();
		});
		
						
		// End Event Listeners validatePass
		
		var validatePass = $('#pass').on("blur", function() {
			
			
		var error = document.getElementById("error");
		var password = $('#pass').val();
		
				//validate the length
		
			if ( password.length < 8 ) {
				$('#length').removeClass('valid').addClass('invalid');
				error.textContent = "Error, Password does not match all the requirements!";
				$('#pass').focus();
				
			} else {
				$('#length').removeClass('invalid').addClass('valid');
				error.textContent = "";
				
				
			}
			
				//validate letter
			if ( password.match(/[A-z]/) ) {
				$('#letter').removeClass('invalid').addClass('valid');
				error.textContent = "";
				
				
			} else {
				$('#letter').removeClass('valid').addClass('invalid');
				error.textContent = "Error, Password does not match all the requirements!";
				$('#pass').focus();
				
			}

			//validate capital letter
			if ( password.match(/[A-Z]/) ) {
				$('#capital').removeClass('invalid').addClass('valid');
				error.textContent = "";
				
			} else {
				$('#capital').removeClass('valid').addClass('invalid');
				error.textContent = "Error, Password does not match all the requirements!";
				$('#pass').focus();
				
			}

			//validate number
			if ( password.match(/\d/) ) {
				$('#number').removeClass('invalid').addClass('valid');
				error.textContent = "";
				
			} else {
				$('#number').removeClass('valid').addClass('invalid');
				error.textContent = "Error, Password does not match all the requirements!";
				$('#pass').focus();
				
			}
			
			//validate special character
			if ( password.match(/[!@#$%^&*()]+/) ) {
				$('#character').removeClass('invalid').addClass('valid');
				error.textContent = "";
				
				
			} else {
				$('#character').removeClass('valid').addClass('invalid');
				error.textContent = "Error, Password does not match all the requirements!";
				$('#pass').focus();
				
			}
	
			
		}); // End of Password validation
		
		/* ***************************************************** 
	// Event Listener to validate hide password info
***************************************************** */	
		var hideInfo = $('#pass1').on("focus", function() {
			$('#passInfo').hide();
		});
		
		
		
/* ***************************************************** 
	// Event Listener to validate match passwords
***************************************************** */	

	
	var match = $('#pass1').on("keyup", function() {
		var pass = $('#pass').val();
		var pass1 = $('#pass1').val();
		if (pass1 != pass){
			$('#pass1').focus();
			//$('#submit').hide();
		}
		else {
			var error = document.getElementById("error");
			error.textContent = "";
			$('#submit').show();
		}
	});// End of Event Listener to match passwords
	
	var match = $('#pass1').on("blur", function() {
		var pass = $('#pass').val();
		var pass1 = $('#pass1').val();
		if (pass1 != pass){
			var error = document.getElementById("error");
			error.textContent = "Error, The passwords do not match!";
			$('#pass1').focus();
			$('#submit').hide();
		}
		else {
			var error = document.getElementById("error");
			error.textContent = "";
			$('#submit').show();
		}
	});// End of Event Listener to match passwords
	
	/* ***************************************************** 
	// Event Listener to view Password
***************************************************** */
	viewPass = $('#icon1').on("click", function() {
		
		$('#pass').attr("type", "text");
		$('#pass1').attr("type", "text");
		$('#icon1').hide();
		$('#icon2').show();
	});
	
	/* ***************************************************** 
	// Event Listener to hide Password
***************************************************** */
	
	hidePass = $('#icon2').on("click", function() {
		
		$('#pass').attr("type", "password") 
		$('#pass1').attr("type", "password") 
		$('#icon2').hide();
		$('#icon1').show();
	});
	
	/* ***************************************************** 
	// Event Listener to Submit the form
***************************************************** */
	
	var submitting = $('#submit').on("click", function(e){
		if  ($('#terms').prop("checked") == false) {
			e.preventDefault();
			var error = document.getElementById("error");
			error.textContent = "You need to accept our terms";
			$('#terms').focus();
		}
		else {		
			e.preventDefault();
			var firstName = $('#first').val();
			$('#msg').show();
			$('#msg').text("Congratulation! " +firstName+ " The account was created succesfully! ");
			document.getElementById("signUp").style.opacity = 0;
			openWindow();
			}
		
	}); // End of Event listener submitting
	
	
	
});	// End of document
	
		 
