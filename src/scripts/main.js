'use strict';

const headers = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

headers.forEach((header) => {
  header.addEventListener('click', () => {
    if (header.textContent === 'Salary') {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const sorted = rows.sort((a, b) => {
        const aSalary = Number(a.cells[1].textContent);
        const bSalary = Number(b.cells[1].textContent);

        return aSalary - bSalary;
      });

      tbody.append(...sorted);
    }
  });
});
