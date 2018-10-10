'use strict'


$(".colorPickSelector1").colorPick({
  'initialColor': "#CD342D",
  'onColorSelected': function () {
    console.log(this.element[0].id)
    this.element.css({ 'backgroundColor': this.color, 'color': this.color })
  }  
});

$(".colorPickSelector2").colorPick({
  'initialColor': "#F17F06",
  'onColorSelected': function () {
    console.log(this.element[0].id)
    this.element.css({ 'background': this.color });
  },
  
});

$(".colorPickSelector3").colorPick({
  'initialColor': "#1DB821",
  'onColorSelected': function () {
    console.log(this.element[0].id)
    this.element.css({ 'background': this.color });

  },
  
});

$(".colorPickSelector4").colorPick({
  'initialColor': "#1D78B8",
  'onColorSelected': function () {
    console.log(this.element[0].id)
    this.element.css({ 'background': this.color });
  },
  
});

$(".colorPickSelector5").colorPick({
  'initialColor': "#641DB8",
  'onColorSelected': function () {
    console.log(this.element[0].id)
    this.element.css({ 'border-color': 'transparent transparent ' + this.color + ' transparent' });
  },
  
});


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



