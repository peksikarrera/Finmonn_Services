//programiranje menija za mobilne telefone i druge uredjaje
$("#pozadina").hide();
$("ul > li > ul").hide();
$("#dugme").click(function(){
  $("#pozadina").stop(true,true);
  $("#pozadina").slideToggle(1400);
});
$("nav > ul > li:nth-child(2)").hover(function(){
  $("ul > li > ul").show();
  $("ul > li > ul").stop(true,true);
  $("ul > li > ul").animate({left:"-8px", opacity:"1", borderWidth:"1px"},1000);
},function(){
  $("ul > li > ul").animate({left:"-58px", opacity:"0", borderWidth:"0px"},600,"linear",function(){
    $("ul > li > ul").hide();
  });
});
$("#arrow img").on("click",function(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
regIme = /^[A-Z][a-z]{2,10}$/;
regPrezime = /^([A-Z][a-z]{3,15})+$/;
regImejl = /^[A-z][\w.]{1,}\@[a-z][\w]{1,}(\.)+[a-z.]{1,}$/;
regTelefon = /^\+[0-9]{8,18}$/;
var greske = [];
document.getElementById("name").addEventListener("blur",function(){
  ime = document.getElementById("name").value;
  if(!regIme.test(ime)){
    document.getElementById("namerror").innerHTML = "Incorrect name";
  }
  else {
    document.getElementById("namerror").innerHTML = "";
  }
});
document.getElementById("surname").addEventListener("blur",function(){
  prezime = document.getElementById("surname").value;
  if(!regPrezime.test(prezime)){
    document.getElementById("surnamerror").innerHTML = "Incorrect surname";
  }
  else {
    document.getElementById("surnamerror").innerHTML = "";
  }
});
document.getElementById("email").addEventListener("blur",function(){
  imejl = document.getElementById("email").value;
  if(!regImejl.test(imejl)){
    document.getElementById("emailerror").innerHTML = "Incorrect e-mail adress";
  }
  else{
    document.getElementById("emailerror").innerHTML = "";
  }
});
document.getElementById("phoneNumber").addEventListener("blur",function(){
  telefon = document.getElementById("phoneNumber").value;
  if(!regTelefon.test(telefon)){
    document.getElementById("phoneNumbererror").innerHTML = "Incorrect phone number. Please use the format : +...";
  }
  else{
    document.getElementById("phoneNumbererror").innerHTML = "";
  }
});
function provera(){
  greske = [];
  ime = document.getElementById("name").value;
  if(!regIme.test(ime)){
    greske.push("Incorrect name");
  }
  prezime = document.getElementById("surname").value;
  if(!regPrezime.test(prezime)){
    greske.push("Incorrect surname");
  }
  telefon = document.getElementById("phoneNumber").value;
  if(!regTelefon.test(telefon)){
    greske.push("Incorrect phone number");
  }
  imejl = document.getElementById("email").value;
  if(!regImejl.test(imejl)){
      greske.push("Incorrect e-mail adress");
  }
  radioDugmad = document.getElementsByName("gender");
  var izabrano;
  for(var i=0;i<radioDugmad.length;i++){
    if(radioDugmad[i].checked){
      izabrano = true;
      break;
    }
  }
  if(!izabrano){
    greske.push("Gender is not selected");
  }
  dan = document.getElementById("daylist");
  mesec = document.getElementById("monthlist");
  godina = document.getElementById("yearlist");
  if(dan.options[dan.selectedIndex].value == 0){
    greske.push("Day is not selected");
  }
  if(mesec.options[mesec.selectedIndex].value == 0){
    greske.push("Month is not selected");
  }
  if(godina.options[godina.selectedIndex].value == 0){
    greske.push("Year is not selected");
  }
  if(greske.length){
    var paragraf = document.createElement("p");
    paragraf.innerHTML = "<br/><b>Failed to submit. Errors: </b>";
    var listaGresaka = document.createElement("ul");
    for(var i=0; i<greske.length; i++){
     listaGresaka.innerHTML += "<li>" + greske[i] + "</li>";
    }
    paragraf.appendChild(listaGresaka);
    $("#errors").html(paragraf);
    $("#errors").fadeIn(600);
    return false;
  }
}
$(document).on("click","ul > li > ul li",function(e){
  e.preventDefault();
  var item = $(this).val();
  var link = $(this).find("a").attr("href");
  localStorage.setItem("izabranLink", item);
  window.location = link;
});
