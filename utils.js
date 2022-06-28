const newEl = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const createCard = (parent, imgLink, title, price, count) => {
  const wrapperEl = newEl("div");
  const titleEl = newEl("h3");
  const priceEl = newEl("p");
  const imgEl = newEl("img");
  const countEl = newEl("p");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  priceEl.className = "price";
  imgEl.className = "img";
  countEl.className = "count";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title;
  priceEl.textContent = price + " €";
  countEl.textContent = count + " pezzi in stock ";

  wrapperEl.append(imgEl, titleEl, priceEl, countEl);
  parent.appendChild(wrapperEl);
};

export { newEl, createCard, q };
