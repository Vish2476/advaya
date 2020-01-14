
//window.location.replace("hunt1.html");
$.getJSON("https://api.ipify.org?format=json", 
function(data) { 

    const form = document.querySelector('#para');
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var address= data.ip;
    
    form.addEventListener('submit', (e) => {
        alert("You will be mailed when round three goes live");
        e.preventDefault();
        db.collection('phunt2').doc(form.pno.value).set({
            name: form.pname.value,
            phone: form.pno.value,
            time:Date().toString().substring(0, 24),
            code:form.crackcode.value,
            ip:address,
        });
        form.name.value = '';
        form.pno.value = '';
        form.crackcode.value='';
        //window.location.replace("hunt1.html");
    });

}) 