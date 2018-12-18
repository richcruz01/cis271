 $(document).ready(function(){
	 
	var phoneColor = $('#colorBlack').on("click", function() {
		$('#slidePhone').attr("src","phoneSaleGallery/note8Black.png");
		
	});
	
	var phoneColor1 = $('#colorBlue').on("click", function() {
		$('#slidePhone').attr("src","phoneSaleGallery/note8Blue.jpg");
		
	});
	
	var phoneColor2= $('#colorLavander').on("click", function() {
		$('#slidePhone').attr("src","phoneSaleGallery/note8Lavander.jpg");
		
	});
	
	var changePrice = $('#capacity').on("change", function() {
		var capacity = $('#capacity').val();
		if (capacity == 64){
		$('#pricePhone').text("Price: U$ 800.00");
		}
		else{
			$('#pricePhone').text("Price: U$ 900.00");
		}
		
	});
	
		 
 $('#plus').click(function(e){
	
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
			
            $('input[name='+fieldName+']').val(currentVal + 1);
			
			
			
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $("#minus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
	
	var addToCart = $('#add').bind("click", function () {
		
		var currentVal = parseInt($('input[name='+fieldName+']').val());
		$('#itemsNumber').text(currentVal);
		$('#qtt').val(0);
	});
});
