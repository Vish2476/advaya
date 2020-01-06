const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#caform');
var promo = "ADV".concat(String(Math.floor((Math.random() * 1000) + 1)));
/*function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
   let city = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().promo+'hai'+doc.id+'  '+form.email.value;

    li.appendChild(name);

    cafeList.appendChild(li);    
}*/
var ar=[];

db.collection('ca').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        //renderCafe(doc);
        ar.push(doc.id);
     });
});

form.addEventListener('submit', (e) => {
    var flag =true;

    e.preventDefault(); 
    var x =form.email.value;
    var y =form.caname.value;
    ar.forEach(myFunction);

function myFunction(item, index) {
            //alert(x+item+flag);
            if(item == x){
                flag=false;
            }}
    if(flag){
    alert('Registered successfully! . We will get to you via email soon.');
      
    db.collection('ca').doc(form.email.value).set({
        caname: form.caname.value,
        college: form.clgName.value,
        collegeid: form.clgId.value,
        //email: form.email.value,
        phone: form.phone.value,
        promo: promo.concat(y.slice(0,3).toUpperCase()),
        mailsent: false,
       // time: d,
    });
    form.caname.value = '';
    form.clgName.value = '';
    form.clgId.value = '';
    form.email.value = '';
    form.phone.value = '';
       // window.location.replace("../routes/careg.html");
    }
    else{
        alert("Email id already registered !");
    }

});
