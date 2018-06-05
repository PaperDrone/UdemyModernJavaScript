document.getElementById('ajax_button_1').addEventListener('click', loadCustomer);
document.getElementById('ajax_button_2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data/customer.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data/customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output = ``;
      customers.forEach(function (c) {
        output += `
        <ul>
          <li>ID: ${c.id}</li>
          <li>Name: ${c.name}</li>
          <li>Company: ${c.company}</li>
          <li>Phone: ${c.phone}</li>
        </ul>
        `;
      })

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}