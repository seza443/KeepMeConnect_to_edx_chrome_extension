function keepMeConnected(){
	//alert("edx page");
	var url = 'https://courses.edx.org';
	  var request = new XMLHttpRequest();

	  request.open('GET', url, true);
	  console.log(url);
	  request.onreadystatechange = function (e) {
		console.log(request, e);
		if (request.readyState == 4) {
		  if (request.status == 200) {
			console.log("request sent");
		  } else {
			console.log('Unable to resolve address into lat/lng');
		  }
		}
	  };
	  request.send(null);
}

setInterval(keepMeConnected,500000);