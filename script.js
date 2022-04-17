(() => {
  const allColors = ["#606c38", "#283618", "#fefae0", "#dda15e", "#bc6c25"];

  function render() {
    const $coolors = document.querySelector("#coolors");

    allColors.forEach(() => {
      $coolors.innerHTML += "<div></div>";
    });
  }

  function color() {
    const $allDivColors = document.querySelectorAll("#coolors div");

    $allDivColors.forEach((element, index) => {
      element.style.backgroundColor = `${allColors[index]}`;
      element.addEventListener("mousemove", () => {
        element.style.width = "200%";
      });
      element.addEventListener("mouseout", () => {
        element.style.width = "100%";
      });
    });
  }

  render();
  color();
})();
