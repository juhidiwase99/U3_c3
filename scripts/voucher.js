let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;
let user=JSON.parse(localStorage.getItem("user"))||[]
console.log(user)
async function getData(){
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data[0].vouchers)
        appendData(data[0].vouchers)
    }catch(err){
        console.log(err)
    }
}
getData()
function appendData(data){
 data.forEach(el => {
     let div1=document.createElement("div")
     let image=document.createElement("img")
     image.src=el.image
     let h4=document.createElement("h4")
     h4.innerHTML=el.name;
     let h3=document.createElement("h3")
     h3.innerHTML="Rs:"+" "+el.price;
     let btn=document.createElement("button")
     btn.innerHTML="Buy"
     btn.addEventListener("click",function(){
        myFunction(el)
     })
     div1.append(image,h4,h3,btn)
     document.getElementById("voucher_list").append(div1)
 });
}
display(user)

function display(dat){
    dat.forEach(el=>{
     let div=document.getElementById("wallet_balance")
     let h3=document.createElement("h2")
     h3.innerHTML=el.amount;

     div.append(h3)
    });
}
function myFunction(element){
    user.push(element)

    localStorage.setItem("user",JSON.stringify(user))
    
}