import { newEl, createCard, q } from "./utils.js";

const userLogIn = prompt("Ciao! Inserisci il tuo nome utente");

try {
  if (!localStorage.getItem("name")) {
    throw new error("Username not found");
  }
} catch (error) {
  localStorage.setItem("name", userLogIn);
}

const navEl = newEl("nav");
const usernameEl = newEl("h2");
const countResultsEl = newEl("p");
const countResultsFooterEl = newEl("p");

navEl.className = "navBar";
usernameEl.className = "name";
countResultsEl.className = "count-results";
countResultsFooterEl.className = "count-results-footer";
usernameEl.textContent = `Hello ${userLogIn}!`;

navEl.append(usernameEl, countResultsEl);
document.body.appendChild(navEl);

const BASE_URL = "https://fakestoreapi.com/products";

const mainEl = q(".main");

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    const filteredProduct = data
      .filter((product) => product.rating.count >= 200)
      .map((product) =>
        createCard(
          mainEl,
          product.image,
          product.title,
          product.price,
          product.rating.count
        )
      );

    countResultsEl.textContent = ` We just found ${filteredProduct.length} items for you!`;
    countResultsFooterEl.textContent = ` We just found ${filteredProduct.length} items for you!`;
  });

navEl.append(usernameEl, countResultsEl);
document.body.appendChild(navEl);

const footerEl = newEl("footer");
const usernameFooterEl = newEl("h2");

footerEl.className = "footer";
usernameFooterEl.className = "name";
usernameFooterEl.textContent = `Hello ${userLogIn}!`;

footerEl.append(usernameFooterEl, countResultsFooterEl);
document.body.appendChild(footerEl);
