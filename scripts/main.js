function myData(n,e,ad,am){
    this.name=n;
    this.email=e;
    this.address=ad;
    this.wallet=am;
}


function getUserData(){
 event.preventDefault();
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let address=document.getElementById("address").value;
  let amount=document.getElementById("amount").value;

 
  let d1=new myData(name,email,address,amount)
  console.log(d1)
  let user=JSON.parse(localStorage.getItem("user"))||[]
 user.push(d1)
 localStorage.setItem("user",JSON.stringify(user));
}

const btn = document.getElementById('submit');
btn.addEventListener('click',function sub(event){
    event.preventDefault();

    const inputs = document.querySelectorAll('#name, #email, #address, #amount');
    inputs.forEach(input => {
        input.value = '';
    });
});

