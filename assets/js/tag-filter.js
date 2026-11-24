// Tag filter on tab pages: the dropdown shows only articles with the chosen
// tag. The choice is kept in the address (?tag=...), so tag links on
// articles and on the home page open the tab already filtered.
(function () {
  var box = document.querySelector(".tag-filter");
  var select = document.getElementById("tag-filter");
  if (!box || !select) return;
  var items = document.querySelectorAll(".post-list > li");

  function show(tag) {
    items.forEach(function (li) {
      var tags = (li.dataset.tags || "").split(" ");
      li.hidden = tag !== "" && tags.indexOf(tag) === -1;
    });
  }

  // Start from the address, ignoring tags this tab doesn't have.
  var wanted = new URLSearchParams(window.location.search).get("tag") || "";
  var known = Array.prototype.some.call(select.options, function (o) { return o.value === wanted; });
  select.value = known ? wanted : "";
  show(select.value);
  box.hidden = false;

  select.addEventListener("change", function () {
    show(select.value);
    var url = new URL(window.location.href);
    if (select.value) url.searchParams.set("tag", select.value);
    else url.searchParams.delete("tag");
    history.replaceState(null, "", url);
  });
})();
