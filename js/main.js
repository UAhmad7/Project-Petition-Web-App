$(document).ready(function(){

	// var API_KEY = '1886bae9081ab785b3f3fce43d0c66a7d52880cdcdfbb3ca8a66e2c33ecb3c0b';
	// var headers = {'X-API-KEY': API_KEY};

	// $.ajax({

	// 	url: 'https://api.change.org/v1/petitions/get_id',
	// 	type: 'GET',
	// 	dataType: 'jsonp',
	// 	headers: headers,
	// 	beforeSend: function(xhr){

	// 		xhr.setRequestHeader('X-API-KEY', API_KEY);

	// 	},
	// 	success: function(data){

	// 		console.log(data);

	// 	},
	// 	error: function(err){

	// 		console.log(err);

	// 	}

	// });
	
	$('#get_button').on('click', function(){

		$.ajax({
			type: "GET",
			url: 'https://api.whitehouse.gov/v1/petitions.json',
			dataType: "jsonp",
			cache: false,
			crossDomain: true,

			success: function (data) {
				console.log(data);
			},
			error: function (err) {
				console.log(err);
			}
		});

	});

});