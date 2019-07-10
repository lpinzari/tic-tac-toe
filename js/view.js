//================ VIEW ====================//


const menu = {

  getSymbolPly1: function() {

    return $('#symbol1').val();

  },

  getSymbolPly2: function() {

    return $('#symbol2').val();

  },

  getNamePly1: function() {
    return $('#player1').val();
  },

  getNamePly2: function() {
    return $('#player2').val();
  },

  getSymbolClass: function(symbol) {

    if (symbol === "cross") {
      return "fas fa-times";
    } else if (symbol === "circle") {
      return "fas fa-circle";
    } else if (symbol === "star") {
      return "fas fa-star";
    }

  },

  updateSymbols: function() {

    let symbol1 = $('#symbol1').val();
    let icon1 = $('.icon')[0];

    if (symbol1 === "cross") {
      icon1.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
    } else if(symbol1 === "circle") {
      icon1.innerHTML = '<i class="fas fa-circle" aria-hidden="true"></i>';
    } else if(symbol1 === "star") {
      icon1.innerHTML = '<i class="fas fa-star" aria-hidden="true"></i>';
    }

    let symbol2 = $('#symbol2').val();
    let icon2 = $('.icon')[1];

    if (symbol2 === "cross") {
      icon2.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
    } else if(symbol2 === "circle") {
      icon2.innerHTML = '<i class="fas fa-circle" aria-hidden="true"></i>';
    } else if(symbol2 === "star") {
      icon2.innerHTML = '<i class="fas fa-star" aria-hidden="true"></i>';
    }

  },

  hide: function() {
    return $('.menu').hide();
  },

  showPanel: function() {
    return $('.panel').css('visibility','visible');
  },

  showGrid: function() {
    return $('.grid').css('visibility','visible');
  }

};
