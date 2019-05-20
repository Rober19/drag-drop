$('#menu-toggle').click(e => {
  e.preventDefault();
  $('#wrapper').toggleClass('toggled');
});
$('#b_introduccion').click(e => {
  console.table(0);
  side_bar({ introduccion: true });
});
$('#b_guia_docentes').click(e => {
  console.table(1);
  side_bar({ guia_docentes: true });
});
$('#b_objetivo').click(e => {
  console.table(1);
  side_bar({ objetivo: true });
});
$('#b_competencias').click(e => {
  console.table(1);
  side_bar({ competencias: true });
});
$('#b_evaluacion').click(e => {
  console.table(1);
  side_bar({ evaluacion: true });
});
$('#b_fuentes').click(e => {
  console.table(1);
  side_bar({ fuentes: true });
});

function side_bar(x) {
  return {
    introduccion: x.introduccion
      ? $('#introduccion').css('display', 'block')
      : $('#introduccion').css('display', 'none'),
    objetivo: x.objetivo
      ? $('#objetivo').css('display', 'block')
      : $('#objetivo').css('display', 'none'),
    competencias: x.competencias
      ? $('#competencias').css('display', 'block')
      : $('#competencias').css('display', 'none'),
    evaluacion: x.evaluacion
      ? $('#evaluacion').css('display', 'block')
      : $('#evaluacion').css('display', 'none'),
    fuentes: x.fuentes
      ? $('#fuentes').css('display', 'block')
      : $('#fuentes').css('display', 'none'),
    guia_docentes: x.guia_docentes
      ? $('#guia_docentes').css('display', 'block')
      : $('#guia_docentes').css('display', 'none'),
      b_contenidos: x.b_contenidos
      ? $('#b_contenidos').css('display', 'block')
      : $('#b_contenidos').css('display', 'none'),
  };
}
