import "./css/style.css";
import "./js/matchers.sortValues";
import "./js/mocking.getLevel";

// TODO: write your code in app.js

import indicateHealth from "./js/mocking.fetchData";

const object = { name: "Маг", health: 60 };
console.log(indicateHealth(object));
