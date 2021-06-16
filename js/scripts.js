jQuery(document).ready(function(){
  jQuery('h1').click(function(){
    alert("This is a heading tag");
    alert("I told you, THIS IS A HEADING TAG");
  });

  $('p').click(function(){
    alert("This is a paragraph")
  });

  $('img').click(function(){
    alert("This is an image")
  });
});