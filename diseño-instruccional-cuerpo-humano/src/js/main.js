$('#menu-toggle').click(e => {
  e.preventDefault();
  $('#wrapper').toggleClass('toggled');
});

let ids = [
  '#b_fuentes',
  '#b_evaluacion',
  '#b_contenidos',
  '#b_competencias',
  '#b_objetivo',
  '#b_guia_docentes',
  '#b_introduccion',
];

let arr1 = {};

ids.forEach(item => {
  $(item).click(e => {
    ids.forEach(x => $(`#${b_key(x)}`).css('display', 'none'));
    $(`#${b_key(e.target.id)}`).css('display', 'block');
    console.log(b_key(e.target.id));
  });
});

function b_key(item) {
  let context = item.split('b_');
  return context[1];
}

// var jqxhr = $.getJSON('info-instruccional.json', function(data ) {
//   var items = [];
//   // $.each( data, function( key, val ) {
//   //   items.push( "<li id='" + key + "'>" + val + "</li>" );
//   // });
 
//   var mainContainer = document.getElementById("introduccion");
//   var div = document.createElement("div");
//   div.innerHTML = ``
//   mainContainer.appendChild(div);
// });

