document.querySelector("#form").addEventListener("submit",Details);
var DetailsArr = JSON.parse(localStorage.getItem("user")) || [];

function Details(){
    event.preventDefault()

    contactObj={
        personName : form.name.value,

        perosnEmail : form.email.value,

        personAddress : form.address.value,

        personAmount : form.amount.value,



    };
    DetailsArr.push(contactObj);
    localStorage.setItem("user",JSON.stringify(DetailsArr));
}