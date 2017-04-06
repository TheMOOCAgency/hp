function finger_slide() {
  $( ".vign_to_slider_vign" ).on( "swiperight", swipeleftHandler );
  $( ".vign_to_slider_vign" ).on( "swipeleft", swiperightHandler );
  function swipeleftHandler( event ){
    var This = $(event.target).parent();
    var id = This.attr('id');
    id = id.replace('vign_to_slider_','');
    id = parseInt(id);
    if(id == 2) {
      This.hide();
      $('#vign_to_slider_1').show();
      $('#vign_to_slider_bouton').find('button').css('border-color','#808080');
      $('#vign_to_slider_bouton_1').css('border-color','#4d4d4d');
    }else{
      id = id + 1;
      console.log(id);
      This.hide();
      $('#vign_to_slider_'+id).show();
      $('#vign_to_slider_bouton').find('button').css('border-color','#808080');
      $('#vign_to_slider_bouton_'+id).css('border-color','#4d4d4d');
    }
  }
  function swiperightHandler( event ){
    var This = $(event.target).parent();
    var id = This.attr('id');
    id = id.replace('vign_to_slider_','');
    id = parseInt(id);
    if(id == 1) {
      This.hide();
      $('#vign_to_slider_2').show();
      $('#vign_to_slider_bouton').find('button').css('border-color','#808080');
      $('#vign_to_slider_bouton_2').css('border-color','#4d4d4d');
    }else{
      id = id - 1;
      console.log(id);
      This.hide();
      $('#vign_to_slider_'+id).show();
      $('#vign_to_slider_bouton').find('button').css('border-color','#808080');
      $('#vign_to_slider_bouton_'+id).css('border-color','#4d4d4d');
    }
  }
}
function vign_to_slider() {
  var w = $(window).width();
  w = parseInt(w);
  if(w > 425) {
    $('.vign_to_slider_vign').each(function(){
      $(this).attr('style','');
    })
    $('#vign_to_slider_bouton').find('button').each(function(){
      $(this).attr('style','');
    })
  }else{
    finger_slide();
    $('#vign_to_slider_bouton').find('button').click(function(){
      var This = $(this);
      var id = This.attr('id');
      id = id.replace('vign_to_slider_bouton_','');
      id = parseInt(id);
      $('.vign_to_slider_vign').hide();
      $('#vign_to_slider_'+id).show();
      $('#vign_to_slider_bouton').find('button').css('border-color','#808080');
      This.css('border-color','#4d4d4d');
    })
  }
}
$(document).ready(function(){
  vign_to_slider();
})
$(window).resize(function(){
  vign_to_slider();
})
