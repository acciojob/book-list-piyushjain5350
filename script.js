//your JS code here. If required.
const form = document.querySelector(".form-group");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const tbody = document.querySelector("#book-list");
  const row = document.createElement("tr");

  ["title", "author", "isbn"].forEach(function (field) {
    const cell = document.createElement("td");
    cell.innerText = form[field].value;
    row.appendChild(cell);
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerHTML = `<span class="material-symbols-outlined"> close </span>`;

  deleteButton.addEventListener("click", function () {
    row.remove();
  });

  const cell4 = document.createElement("td");
  cell4.appendChild(deleteButton);
  row.appendChild(cell4);

  tbody.appendChild(row);
  form.reset();
});