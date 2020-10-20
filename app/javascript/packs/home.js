$(document).on('turbolinks:load', function(){
  console.log("ready");
  $(".close").click(hideAlert);
  $(".occult").click(toggleContainer);
  $(".hideShow").click(hideTex);
});

function hideAlert(){
  $(".holy").hide();
}

function toggleContainer(){
  var containerId=$(this).data("target");
  $(containerId).toggle();
}

function hideTex() {
  var divId=$(this).data("target");
  $(divId).toggle();
  $(".collapse").not(divId).hide();
}
