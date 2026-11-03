

let prices = document.querySelectorAll(".prices");

let total = 0;

prices.forEach(function(price) {

    total = total + Number(price.innerText);

});

let table = document.querySelector("table");

let tr = document.createElement("tr");

let td = document.createElement("td");

td.setAttribute("colspan", "2");

td.innerText = "Total Price: " + total;

tr.appendChild(td);

table.appendChild(tr);

