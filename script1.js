function positioning(){
  let currentWidth = parseFloat(window.innerWidth);
  let elementWidth = $("#slider h1").outerWidth();
  let leftCoordinate = (currentWidth - elementWidth)/2;
  let elementHeight = $("#slider h1").outerHeight();
  let topCoordinate = (465 - elementHeight)/2;
  $("#slider h1").css("left",leftCoordinate);
  $("#slider h1").css("top",topCoordinate);
  elementWidth = $("#slider p").outerWidth();
  elementHeight = $("#slider p").outerHeight();
  leftCoordinate = (currentWidth - elementWidth)/2;
  $("#slider p").css("left",leftCoordinate);
  $("#slider p").css("top",topCoordinate);
}
window.onload = function(){
  positioning();
  //danimaciko ubacivanje slika slajdera koje se hvataju pomocu ajaxa a koje su u json obliku
  $.ajax({
    url : "sliderpictures.json",
    type : "GET",
    dataType : "json",
    error : function(xhr, status, error){
      console.log(error);
    },
    success: function(data){
      var ispis = "";
      for(var i=0; i<data.length; i++){
        ispis += '<li class="slide"><img src="' + data[i].src +  '" alt="' + data[i].alt + '"/></li>';
      }
      $(".slides").html(ispis);
    }
  });

  //programiranje slajdera
  $(function(){
    var currentSlide = 1;
    var $slider = $("#slider");
    var $slideContainer = $slider.find(".slides");
    function startSlider(){
      interval = setInterval(function(){
      $("#slider .slides").animate({"margin-left":"-=1536px"},1000,function(){
        currentSlide++;
        if(currentSlide === 5){
          $slideContainer.css("margin-left",0);
          currentSlide = 1;
        }
      });
    },4800);
  }
  function stopSlider(){
    clearInterval(interval);
  }
  $slider.on("mouseenter",stopSlider).on("mouseleave",startSlider);
  startSlider();

 //dinamicko ispisavanje sredisnjeg sadrzaja stranice koji je skladisten kao niz objekata
  var glavniSadrzaj = [
    {
      "heading":"Saving",
      "paragraph1":"Start saving money effectively",
      "paragraph2":"Starting from $20 per month",
      "image":{
        "src" : "images/saving.jpeg",
        "alt" : "money"
      }
    },
    {
      "heading":"Creating A Business Plan",
      "paragraph1":"One of the most crucial facilities",
      "paragraph2":"Starting from $500",
      "image":{
        "src" : "images/bplan.jpeg",
        "alt" : "business plan graph"
      }
    },
    {
      "heading":"Income Management",
      "paragraph1":"Perfectly organize your budget",
      "paragraph2":"Starting from $30 per month",
      "image":{
        "src" : "images/incomemanagementgraph.jpg",
        "alt" : "graphics income"
      }
    },
    {
      "heading":"Achieving Financial Goals",
      "paragraph1":"Achieving financial goals is clearly your key to success",
      "paragraph2":"Starting from $45 per month",
      "image":{
        "src" : "images/achgoals.png",
        "alt" : "achieving goals graph"
      }
    },
    {
      "heading":"Financial Crisis Exit Stategy",
      "paragraph1":"You won't know what the crisis is",
      "paragraph2":"Starting from $50 per month",
      "image":{
        "src" : "images/rise.png",
        "alt" : "rise graph"
      }
    }
  ];
ispis = "";
for(var i=0; i<3;i++){
  ispis += '<article class="col-sm-12 col-md-4"><h3>' + glavniSadrzaj[i].heading + '</h3><p>'+ glavniSadrzaj[i].paragraph1 +'</p><p>' + glavniSadrzaj[i].paragraph2 + '</p><div class="row"><img src="' + glavniSadrzaj[i].image.src + '" alt="' + glavniSadrzaj[i].image.alt +'"/></div></article>';
 }
 $("#row1").html(ispis);
 ispis = "";
 for(var i=3; i<5;i++){
   ispis += '<article class="col-sm-12 col-md-6"><h3>' + glavniSadrzaj[i].heading + '</h3><p>'+ glavniSadrzaj[i].paragraph1 +'</p><p>' + glavniSadrzaj[i].paragraph2 + '</p><div class="row"><img src="' + glavniSadrzaj[i].image.src + '" alt="' + glavniSadrzaj[i].image.alt +'"/></div></article>';
  }
  $("#row2").html(ispis);
});

//dinamicko dodavanje podmenija
  var podmeni = document.createElement("ul");
  podmeni.setAttribute("id","droplista");
  podmeni.setAttribute("class","nav");
  podmeni.innerHTML = '<li value="1" class="nav-item"><a class="nav-link" href="second.html">Saving</a></li><li value="2" class="nav-item"><a class="nav-link" href="second.html">Creating a business plan</a></li><li value="3" class="nav-item"><a class="nav-link" href="second.html">Income management</a></li><li value="4" class="nav-item"><a class="nav-link" href="second.html">Achieving financial goals</a></li><li value="5" class="nav-item"><a class="nav-link" href="second.html">Financial crisis exit strategy</a></li>';
  document.getElementById("menu2").appendChild(podmeni);
  $("#menu2 > ul").css("list-style-type","none");
  $("#droplista").hide();

//programiranje dropdown menija
$("#menu2").click(function(){
$("#droplista").stop(true,true);
$("#droplista").slideToggle("medium");
});
//programiranje strelice za povratak na vrh stranice
$("#arrow img").on("click",function(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
}
//programiranje menija za mobilne telefone i druge uredjaje
var klik = 0;
$("#pozadina").hide();
$("#dugme").click(function(){
  $("#pozadina").stop(true,true);
  $("#pozadina").slideToggle(1400);
  klik++;
  if(klik%2==1){
  $("#slider p").stop(true,true);
  $("#slider p").fadeOut(300);
  $("#slider h1").fadeOut(300);
 }
 else{
   $("#slider p").stop(true,true);
   $("#slider p").delay(800).fadeIn(500);
  $("#slider h1").delay(800).fadeIn(500);
 }
});
//dropdown meni i pamcenje linka na koji je kliknuto, da bi se kasnije skrolovalo do dela stranice koji sadrzi tu info na koju je kliknuto
$(document).on("click","#droplista li",function(e){
  e.preventDefault();
  var item = $(this).val();
  var link = $(this).find("a").attr("href");
  localStorage.setItem("izabranLink", item);
  window.location = link;
});
// responsiveness
$(window).resize(function(){
  positioning();
});