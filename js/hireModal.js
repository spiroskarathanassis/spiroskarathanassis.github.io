function submitHireForm() {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var name = $('#inputName').val();
	var email = $('#inputEmail').val();
	var website = $('#inputWebsite').val();
	var position = $('#inputPosition').val();
	var message = $('#inputMessage').val();
	
	if(name.trim() === '') {
		alert('Please enter your name');
		$('#inputName').focus();
		return false;
	} else if(email.trim() === '') {
		alert('Please enter your name');
		$('#inputEmail').focus();
		return false;
	} else if(position.trim() === '') {
		alert('Please enter your name');
		$('#inputPosition').focus();
		return false;
	} else if(message.trim().length < 30) {
		alert('Please enter your name');
		$('#inputMessage').focus();
		return false;
	} else {
		
		$.ajax({
			type: 'POST',
			url: 'submitForm.php',
			data: 'hireFormSubmit=1&name=' + name + '&email=' + email + '&website=' + website + 
					'&position=' + position + '&message=' + message,
			beforeSend: function () {
				$('.sendButton').attr("disabled", "disabled");
				$('.modal-body').css('opacity', '.5');
			},
			success: function(msg) {
				if(msg == 'ok') {
					$('#inputName').val('');
					$('#inputEmail').val('');
					$('#inputWebsite').val('');
					$('#inputPosition').val('');
					$('#infoMsg').html('<span style="color:green;">Thanks for contacting me.</span>');
				} else {
					$('#infoMsg').html('<span style="color:red;">Something went wrong, please try again.</span>');					
				}
				$('.sendButton').removeAttr("disabled");
				$('.modal-body').css('opacity', '');
			}
		});	
	}	
}
