$(document).ready(function(){
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
  $("article a").vanillabox();
  $("ul > li > ul a").click(function(e){
    e.preventDefault();
    var section = $(this).attr("href");
    var elementOffset = $("#" + section).offset().top - 20;
    $("html, body").animate({
      scrollTop: elementOffset
    },1200);
  });
  if(localStorage){
    var opcija = "article" + localStorage.getItem("izabranLink");
    if(localStorage.getItem("izabranLink")){
    var elementOffset = $("#" + opcija).offset().top - 40;
    $("html, body").animate({
      scrollTop: elementOffset
    },1200);
    localStorage.removeItem("izabranLink");
  }
}
});
