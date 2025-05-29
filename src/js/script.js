const form = document.getElementById('item-form');
const nameInput = document.getElementById('item-name');
const qtyInput = document.getElementById('item-qty');
const errorMsg = document.getElementById('error-msg');
const listEl = document.getElementById('item-list');
const items = [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const qty = Number(qtyInput.value);
  if (!name) {
    errorMsg.textContent = 'Item name is required.';
    return;
  }
  if (name.length > 25) {
    errorMsg.textContent = 'Name must be 25 characters or fewer.';
    return;
  }
  if (!Number.isInteger(qty) || qty < 1 || qty > 50) {
    errorMsg.textContent = 'Quantity must be between 1 and 50.';
    return;
  }
  errorMsg.textContent = '';
  items.push({ name, qty });
  listEl.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name}: ${item.qty}`;
    listEl.appendChild(li);
  });
  console.log(JSON.stringify(items));
  form.reset();
  nameInput.focus();
});
