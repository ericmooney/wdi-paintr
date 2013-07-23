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

  var paint = function(){
    var paint_box = $(this);
    var color = $('#selected_color').css('background-color');

    paint_box.css('background-color', color);
  };

  $('#add_color').on('click', add_color);
  $('#colors').on('click', '.box', set_color);
  $('.paint_box').on('mouseover', paint);


  var add_photo = function(){
    var box = $('<div>');
    box.addClass('box');

    var photo = $('#photo').val();
    box.css('background-image', 'url('+photo+')');

    $('#photos').prepend(box);
    $('#photo').val('');

  };

  var set_image = function(){
    var box = $(this);
    var image = box.css('background-image');

    $('#canvas').css('background-image', image);
  };


  $('#add_photo').on('click', add_photo);
  $('#photos').on('click', '.box', set_image);




});