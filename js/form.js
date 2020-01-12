const _phno = document.querySelector("#ph");
const _cphno = document.querySelector("#cph");
const _email = document.querySelector("#mail");
const _cemail = document.querySelector("#cmail");

_cphno.addEventListener("blur", () => {
  if (_phno.value != _cphno.value) {
    _phno.style.border = "2px solid red";
    _cphno.style.border = "2px solid red";
  } else {
    _phno.style.border = "2px solid #0f0";
    _cphno.style.border = "2px solid #0f0";
  }
});
_phno.addEventListener("blur", () => {
  if (_phno.value != _cphno.value) {
    _phno.style.border = "2px solid red";
    _cphno.style.border = "2px solid red";
  } else {
    _phno.style.border = "2px solid #0f0";
    _cphno.style.border = "2px solid #0f0";
  }
});

_email.addEventListener("blur", () => {
  if (_email.value != _cemail.value) {
    _email.style.border = "2px solid red";
    _cemail.style.border = "2px solid red";
  } else {
    _email.style.border = "2px solid #0f0";
    _cemail.style.border = "2px solid #0f0";
  }
});
_cemail.addEventListener("blur", () => {
  if (_email.value != _cemail.value) {
    _email.style.border = "2px solid red";
    _cemail.style.border = "2px solid red";
  } else {
    _email.style.border = "2px solid #0f0";
    _cemail.style.border = "2px solid #0f0";
  }
});
