

/* Add "https://api.ipify.org?format=json" statement 
		this will communicate with the ipify servers in 
		order to retrieve the IP address $.getJSON will 
		load JSON-encoded data from the server using a 
		GET HTTP request */ 

		$.getJSON("https://api.ipify.org?format=json", 
										function(data) { 

			// Setting text of element P with id gfg 
			$("#gfg").html(data.ip); 
		})
        const form = document.querySelector('#para');
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var address = gfg;

form.addEventListener('submit', (e) => {
    alert("You will be notified when round two goes live");
    e.preventDefault();
    db.collection('parallaxotest').doc(form.pno.value).set({
        name: form.pname.value,
        phone: form.pno.value,
        time:Date().toString().substring(0, 24),
        ip:address,
    });
    form.name.value = '';
    form.pno.value = '';
    //window.location.replace("hunt1.html");
});
//window.location.replace("hunt1.html");
