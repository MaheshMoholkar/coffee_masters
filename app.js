import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// Link web components
import { MenuPage } from "./components/MenuPage.js";
import { ProductItem } from "./components/ProductItem.js";
import { DetailsPage } from "./components/DetailsPage.js";

window.app = {};
app.store = Store;
app.router = Router;

// Wait for DOM to be loaded
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});

window.addEventListener("appcartchange", (event) => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
