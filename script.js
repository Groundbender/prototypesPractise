const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

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
    font-size: ${this.fontSize}px;`;

    return element;
  };
};

let div = new DomElement(".div", 100, 100, "red", 18);

let p = new DomElement("#paragraph", 200, 200, "blue", 30);

document.body.append(div.createElem());
document.body.append(p.createElem());
