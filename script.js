const form=document.getElementById("form");
const fnlable=document.getElementById("fnlabel");
const fname=document.getElementById("fname");
const fnerror=document.getElementById("fnerror");
const lnlable=document.getElementById("lnlable");
const lname=document.getElementById("lname");
const lnerror=document.getElementById("lnerror");
const emlabel=document.getElementById("emlabel");
const email=document.getElementById("email");
const emerror=document.getElementById("emerror");
const moblabel=document.getElementById("moblabel");
const mobilenumber=document.getElementById("mobilenumber");
const moberror=document.getElementById("moberror");
const addlabel=document.getElementById("addlabel");
const address=document.getElementById("address");
const adderror=document.getElementById("adderror");
const statelablel=document.getElementById("statelablel");
const select=document.getElementById("select");
const selecterror=document.getElementById("selecterror");
const pinlabel=document.getElementById("pincodelabel");
const pincode=document.getElementById("pincode");
const pinerror=document.getElementById("pinerror");
const dislabel=document.getElementById("dislabel");
const  district=document.getElementById("district");
const diserror=document.getElementById("diserror");
const gender=document.getElementById("rbd1");
const generror=document.getElementById("generror");
var ck1 = document.getElementById('lang1');
var ck2 = document.getElementById('lang2');
var ck3 = document.getElementById('lang3');


 
function firstname(){
  if(fname.value===""){
    fnerror.innerHTML="enter your name";
    fname.style.border="3px solid red";
    return false;
  }
  else if(fname.value.length < 5 || fname.value.length > 20)
  {
    fnerror.innerHTML="Name should min 3 and max 20 charecter";
    fname.style.border="3px solid red";
    return false;
  }
  else{
    fnerror.innerHTML= "";
    fname.style.border="3px solid green";
    return true;
  }

}

function lastname(){
  if(lname.value===""){
    lnerror.innerHTML="enter your name";
    lname.style.border="3px solid red";
    return false;
  }
  else if(lname.value.length < 2 || lname.value.length > 8)
  {
    lnerror.innerHTML="Name should min 2 and max 8 charecter";
    lname.style.border="3px solid red";
    return false;
  }
  else{
    lnerror.innerHTML= "";
    lname.style.border="3px solid green";
    return true;
  }

}
function emailfun(){
  if(email.value===""){
    emerror.innerHTML="enter your email";
    email.style.border="3px solid red";
    return false;
  }
  else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
  {
    emerror.innerHTML="enter your valid email";
    email.style.border="3px solid red";
    return false;
  }
  else{
    emerror.innerHTML= "";
    email.style.border="3px solid green";
    return true;
  }

}
function mobilenum(){
  if(mobilenumber.value==="")
  {
    moberror.innerHTML="enter your number";
    mobilenumber.style.border="3px solid red";
    return false;

  }
  else if((isNaN(mobilenumber.value)|| mobilenumber.value.length < 10 || mobilenumber.value.length > 10)){
    moberror.innerHTML="enter your valid number";
    mobilenumber.style.border="3px solid red";
    return false;

  }
  else{
    moberror.innerHTML="";
    mobilenumber.style.border="3px solid green";
    return true;
  }
}
  
function addressfun(){
  if(address.value==="")
  {
    adderror.innerHTML="enter your address";
    address.style.border="3px solid red";
    return false;
  }
  else if(address.value.match([/[0-9]/, /[A-Z]/, /[a-z]/])){
    adderror.innerHTML="enter your valid address";
    address.style.border="3px solid red";
    return false;
  }
  else{
    adderror.innerHTML="";
    address.style.border="3px solid green";
    return true;
  }
}
function selectstate(){
  if(select.value ==="-1")
  {
    selecterror.innerHTML="select your state";
    select.style.border="3px solid red";
    return false;
  }
  else{
    selecterror.innerHTML="";
    select.style.border="3px solid green";
    return true;
  }
}
function pincodefun(){
  if(pincode.value==="")
  {
    pinerror.innerHTML="enter your pinnumber";
    pincode.style.border="3px solid red"
    return false;
}
else if(pincode.value.length>6||pincode.value.length<6)
{
  pinerror.innerHTML="enter maximum 6 digit number";
  pincode.style.border="3px solid red";
  return false;
}
else{
    pinerror.innerHTML="";
    pincode.style.border="3px solid green";
    return true;
}

}
function districtfun(){
  if(district.value==="")
  {
    diserror.innerHTML="enter your district";
    district.style.border="3px solid red";
    return false;

  }
  else if(district.value.match(/[^a-zA-Z]/g)){
    diserror.innerHTML="number not allowed";
    district.style.border="3px solid red";
    return false;
    
  }
  else{
    diserror.innerHTML="";
    district.style.border="3px solid green";
    return true;

  }
}


 form.addEventListener("submit", e=>{
  e.preventDefault();
  checkinput();
})
function checkinput(){
const firstnametrim=fname.value.trim();
  const lastnametrim=lname.value.trim();
  const emailtrim=email.value.trim();
  const mobilenumbertrim=mobilenumber.value.trim();
  const addresstrim=address.value.trim();
  const selecttrim=select.value.trim();
  const pincodetrim=pincode.value.trim();
  const districttrim=district.value.trim();
  const gendertrim=document.formm.gender.value;
   
  var gender=form.querySelectorAll('input[name="gender"]:checked');
  if(!gender.length){
    generror.innerHTML="click your gender";
    return false;
  }
  
  var ckbox = document.getElementsByName('ck');
    var ckboxerror = document.getElementById("ckerror");
    var ck1 = "";
    var n = 0;
    for (var i = 0; i < ckbox.length; i++) 
    {
        if (ckbox[i].checked) {
            ck1 += ckbox[i].value + " ";
            n++;
        }
    }
    if (n == 0) {
        ckboxerror.innerHTML ="Select the Language";
        return false;
    }

  document.write("Firstname:"+""+firstnametrim+"<br>");
  document.write("Lastname:"+""+ lastnametrim+"<br>");
  document.write("Email:"+""+emailtrim+"<br>");
  document.write("Moblie Number:"+""+mobilenumbertrim+"<br>");
  document.write("Gender:"+""+gendertrim+"<br>");
  document.write("Address:"+""+addresstrim+"<br>");
  document.write("State:"+""+selecttrim+"<br>");
  document.write("Languages Know:"+""+ck1+"<br>");
  document.write("Pincode:"+""+pincodetrim+"<br>");
  document.write("District:"+""+districttrim+"<br>");

}