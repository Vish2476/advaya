const form = document.querySelector('#para');
form.addEventListener('submit', (e) => {
    alert("Round two will be live on 19012020");
    e.preventDefault();
    db.collection('parallaxo').doc(form.pno.value).set({
        name: form.pname.value,
        phone: form.pno.value,
    });
    form.name.value = '';
    form.pno.value = '';
    //window.location.replace("reg.html");
});
