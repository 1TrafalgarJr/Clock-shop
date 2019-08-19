function gid(i) {return document.getElementById(i);}
function QS(el,s) {return el.querySelector(s);}

var min1 = gid('min1'), ms = QS(document, '.modalka').style;

min1.onmouseover = function() {
  var box = this.getBoundingClientRect();
  ms.display = 'block';
};

min1.onmouseout = function() {
  ms.display = 'none';
};
