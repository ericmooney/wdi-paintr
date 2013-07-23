$(document).ready(function(){

  var add_color = function(){
    var box = $('<div>');
    box.addClass('box');


    var color = $('#color').val();
    box.css('background-color', color); //set color (setter)

    $('#colors').prepend(box);

    $('#color').val('').focus();
  };

  var set_color = function(){
    var box = $(this);
    var color = box.css('background-color'); //retreive css (getter)

    $('#selected_color').css('background-color', color);
  };

  $('#add_color').on('click', add_color);
  $('.box').on('click', set_color);
});