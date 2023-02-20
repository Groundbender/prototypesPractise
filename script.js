document.addEventListener("DOMContentLoaded", function (e) {
  const DomElement = function (
    selector,
    height,
    width,
    bg,
    fontSize,
    position,
    top,
    left
  ) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;
    this.top = top;
    this.left = left;

    this.createElem = function () {
      let element;
      if (this.selector[0] === ".") {
        element = document.createElement("div");
        element.classList.add(this.selector.slice(1));
        element.textContent = "Это элемент div";
      } else if (this.selector[0] === "#") {
        element = document.createElement("p");
        element.id = this.selector.slice(1);
        element.textContent = "Это элемент p";
      }
      element.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      background: ${this.bg};
      font-size: ${this.fontSize}px;
      position: ${this.position};
      top:${this.top};
      left:${this.left};
      `;

      return element;
    };
  };

  // let div = new DomElement(".div", 100, 100, "red", 18);

  // let p = new DomElement("#paragraph", 200, 200, "blue", 30);

  // document.body.append(div.createElem());
  // document.body.append(p.createElem());

  let square = new DomElement(".div", 100, 100, "green", 0, "absolute", 0, 0);
  document.body.append(square.createElem());

  document.addEventListener("keydown", (event) => {
    const div = document.querySelector("div");
    if (event.key === "ArrowUp") {
      // square.top = `${this.top + 10}"px"`;
      div.style.top = parseInt(div.style.top) - 10 + "px";
    }
    if (event.key === "ArrowDown") {
      // square.top = `${this.top + 10}"px"`;

      div.style.top = parseInt(div.style.top) + 10 + "px";
    }
    if (event.key === "ArrowRight") {
      // square.left = `${this.left + 10}"px"`;
      div.style.left = parseInt(div.style.left) + 10 + "px";
    }
    if (event.key === "ArrowLeft") {
      // square.left = `${this.left - 10}"px"`;

      div.style.left = parseInt(div.style.left) - 10 + "px";
    }
  });
});
