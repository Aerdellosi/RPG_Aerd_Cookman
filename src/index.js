import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {listOfFirstItemsArray} from './section5RPG.js';

export let makeFirstItems = function(array){
  console.log("is button working");
  const selectItemsButton = document.getElementById("first-items-select");
  let form = document.createElement("form");
  selectItemsButton.after(form);
  array.forEach(element => {
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    label.innerText = element.name + ": " + element.description;
    label.setAttribute("for", "1" + element.name);
    checkbox.setAttribute("value", element.name);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "starting-tiems");
    checkbox.setAttribute("id", "1" + element.name);
  });
};

window.addEventListener("load", function() {
  const selectItemsButton = document.getElementById("first-items-select");
  selectItemsButton.onclick = (event) => {
    event.preventDefault()
    makeFirstItems(listOfFirstItemsArray());
  }
} );