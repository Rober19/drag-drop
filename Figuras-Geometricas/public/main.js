let figuras = []
$(() => {

  $(".forma").draggable
    ({
      stack: '.forma2 div',
      cursor: 'move',
      revert: true
    });

  $(".forma").data({
    'originalLeft': $(".forma").css('left'),
    'origionalTop': $(".forma").css('top')
  });



  $(".forma2").droppable
    ({
      accept: '.forma',
      drop: (event, ui) => {
        handleDrop(event, ui)
      }
    });



  $(".reset").click(() => {
    $(".forma").css({
      'left': $(".forma").data('originalLeft'),
      'top': $(".forma").data('origionalTop')
    }
    );
  });
});

async function handleDrop(event, ui) {
  var slotNumber = event.target.classList[0];
  var cardNumber = ui.draggable[0].classList[0];
  // console.log(event.target.className)
  // console.log(ui.draggable[0].className)

  if (slotNumber == cardNumber) {
    $(this).find(`.${cardNumber}`).html();
    ui.draggable.addClass('correct');
    $(`.${cardNumber}`).draggable
      ({
        revert: 'invalid',
        snap: `.${slotNumber}`,
        snapMode: 'corner',
        snapTolerance: '22'
      });
    beep();


    if (!figuras.includes(cardNumber)) {
      figuras.push(cardNumber)
    }

    console.log(figuras)

    if (figuras.length == 5) {
      await swal({
        type: 'success',
        title: 'Excelente, Lo Completaste!!!👏🏻👏🏻',
        // html: "<img src='../Arrastrar-cuerpo humano/public/imgs/complete.png' style='width: 270px'>",
      })
      await location.reload(true);
    } else {
      ToastMsg_OK()
    }
   

    //ui.draggable.draggable('option', 'revert', false);
  } else {
    error();
    ToastMsg_ERR()
    if (figuras.includes(cardNumber)) {
      figuras.splice(figuras.indexOf(cardNumber), 1);
    }

    console.log(figuras)

  }
}




function ToastMsg_OK() {
  const toast = swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 1500
  });
  toast({
    type: 'success',
    title: 'Muy Bien'
  })
}

function ToastMsg_ERR() {
  const toast = swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 1500
  });
  toast({
    type: 'error',
    title: 'Fallaste, Intenta en otra'
  })
}

function AlertMsg_ERR() {
  swal({
    type: 'error',
    title: 'Fallaste, Intenta en otra',
    animation: false,
    customClass: 'animated tada'
  })
}

function AlertMsg_OK() {
  swal({
    type: 'success',
    title: 'Muy Bien!!',
    animation: false,
    customClass: 'animated bounceIn'
  })

}


function beep() {
  let snd = new Audio("data:audio/wav;base64,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");
  snd.play();
}

function error() {
  let snd = new Audio("data:audio/wav;base64,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");
  snd.play();
}


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



