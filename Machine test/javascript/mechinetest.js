var points = [1, 2, 3, 4, 5, 6, 7, 8, 9];
window.onload = function() {
  loop(points);
};
function shuffle() {
  points.sort(function(a, b) {
    return 0.5 - Math.random();
  });
  loop(points);
}

function sort() {
  points.sort();
  loop(points);
}

function loop(points) {
  var str = "";
  points.forEach(function(slide) {
    str += '<div class="col card-bg-' + slide + '">' + slide + "</div>";
  });
  document.getElementById("demo").innerHTML = str;
}
