'use strict';

const header = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

header.addEventListener('click', () => {
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const sorted = rows.sort((a, b) => {
    const aSalary = Number(a.cells[1].textContent);
    const bSalary = Number(b.cells[1].textContent);

    return aSalary - bSalary;
  });

  tbody.append(...sorted);
});
