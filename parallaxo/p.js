
const form = document.querySelector('#para');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

form.addEventListener('submit', (e) => {
    alert("You will be notified when round two goes live");
    e.preventDefault();
    db.collection('parallaxoday2').doc(form.pno.value).set({
        name: form.pname.value,
        phone: form.pno.value,
        time:Date().toString().substring(0, 24),
    });
    form.name.value = '';
    form.pno.value = '';
    //window.location.replace("hunt1.html");
});
//window.location.replace("hunt1.html");
