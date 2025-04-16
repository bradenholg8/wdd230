const tableBody = document.querySelector("#rental-table-body");

fetch("data/rentals.json")
  .then(response => response.json())
  .then(data => {
    tableBody.innerHTML = "";
    data.forEach(item => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><img src="${item.image}" alt="${item.type}" width="100" loading="lazy" /></td>
        <td>${item.type}</td>
        <td>${item.maxPersons}</td>
        <td>$${item.reservationHalf}</td>
        <td>$${item.reservationFull}</td>
        <td>$${item.walkInHalf}</td>
        <td>$${item.walkInFull}</td>
      `;

      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    tableBody.innerHTML = `<tr><td colspan="7">Failed to load rental data.</td></tr>`;
    console.error("Error loading rental data:", error);
  });
