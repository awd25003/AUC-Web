/* Services page – live search across service cards */
(function () {
  var input = document.getElementById("svcSearch"), grid = document.getElementById("svcGrid");
  if (!input || !grid) return;
  var cards = [].slice.call(grid.querySelectorAll(".svc-card")), empty = document.getElementById("svcEmpty"), label = document.getElementById("svcCount");
  function run() {
    var q = input.value.trim().toLowerCase(), n = 0;
    cards.forEach(function (c) { var ok = !q || c.textContent.toLowerCase().indexOf(q) > -1; c.hidden = !ok; if (ok) n++; });
    empty.hidden = n !== 0;
    label.textContent = q ? n + " / " + cards.length : "";
  }
  input.addEventListener("input", run);
})();
