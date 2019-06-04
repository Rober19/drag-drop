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
  '#b_autores',
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

