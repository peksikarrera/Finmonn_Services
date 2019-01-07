//programiranje menija za mobilne telefone i druge uredjaje
$(document).ready(function(){
  $("#pozadina").hide();
  $("ul > li > ul").hide();
  $("#dugme").click(function(){
    $("#pozadina").stop(true,true);
    $("#pozadina").slideToggle(1400);
  });
  $("#arrow img").on("click",function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
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
  $(document).on("click","#podmeni li",function(e){
    e.preventDefault();
    var item = $(this).val();
    var link = $(this).find("a").attr("href");
    localStorage.setItem("izabranLink", item);
    window.location = link;
  });
});
