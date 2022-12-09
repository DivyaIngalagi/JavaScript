
  document
    .getElementById("parent")
    .addEventListener("click", parentClickEvent, true);

  document
    .getElementById("child")
    .addEventListener("click", childClickEvent, true);

  function parentClickEvent() {
    alert("parent event.:- Div");
  }

  function childClickEvent() {
    alert("child event: - span.");
  }
