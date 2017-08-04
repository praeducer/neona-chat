$(function() {
  var themes = ["ethereal", "gita", "mark", "ilona", "kingdom", "selektor"];
  function spiralBuffer(names) {
    var element;
    for(var i=0; i<names.length; i++) {
      element = document.getElementById("spiral-buffer-"+names[i]);
      if (element) return element;
    }
    return document.createElement('canvas');
  }
  var copyCanvas = spiralBuffer(themes);
  var canvas = document.getElementById("spiral-buffer-header");
  var container = document.getElementsByTagName("nav")[0];
  if (typeof isModeratHome !== "undefined") {
    canvas.width = 1000;
    canvas.height = 67;
  } else {
    canvas.width = window.innerWidth;
    canvas.height = container.clientHeight;
    window.onresize = function() {
      canvas.width = window.innerWidth;
      canvas.height = container.clientHeight;
    };
  }
  var ctx = canvas.getContext("2d");

  render(0);

  function render(t) {
    ctx.globalAlpha = 0.6;
    ctx.drawImage(copyCanvas, 0, 0);
    requestAnimationFrame(render);
  }
});
