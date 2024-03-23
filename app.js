import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// Link web components
import { MenuPage } from "./components/MenuPage.js";

window.app = {};
app.store = Store;
app.router = Router;

// Wait for DOM to be loaded
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});
