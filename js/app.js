// User Class : Represent a User

class User {
  constructor(firstname, lastname, number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.number = number;
  }
}

// UI Class : Deals with all the UI Function
class UI {
  static displayUser() {
    let storedUsers = [
      {
        firstname: 'Ahmad',
        lastname: 'Maqbool',
        number: '+92 314 4121242',
      },
      {
        firstname: 'Saeed',
        lastname: 'Ahmad',
        number: '+92 310 1111598',
      },
      {
        firstname: 'Usman',
        lastname: 'Sadiq',
        number: '+92 898 8787664',
      },
      {
        firstname: 'Muhammad',
        lastname: 'Sajid',
        number: '+92 310 11113543',
      },
    ];
    const users = storedUsers;
    users.forEach((user) => UI.addUserToList(user));
  }
  static addUserToList(user) {
    const list = document.querySelector('#user_list');
    const row = document.createElement('li');
    row.classList.add('item-user');
    row.innerHTML = `
    <h6 class='first-name'>${user.firstname}</h6>
    <h6 class='last-name'>${user.lastname}</h6>
    <h6 class='number'>${user.number}</h6>
    <button class="waves-effect waves-light btn delete">X</button>
     `;
    list.appendChild(row);
  }
  // Validation
  static alertMessage(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('.row');
    container.insertBefore(div, form);

    // Remove the alert
    setTimeout(() => div.remove(), 3000);
  }

  static deleteUser(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }
  static clearFields() {
    document.querySelector('#firstname').value = '';
    document.querySelector('#lastname').value = '';
    document.querySelector('#number').value = '';
  }
}

document.addEventListener('DOMContentLoaded', UI.displayUser);

document.querySelector('#user_form').addEventListener('submit', (e) => {
  e.preventDefault();
  const firstname = document.querySelector('#firstname').value;
  const lastname = document.querySelector('#lastname').value;
  const number = document.querySelector('#number').value;
  if (
    firstname === '' ||
    lastname === '' ||
    number === '' ||
    firstname === ' ' ||
    lastname === ' ' ||
    number === ' '
  ) {
    UI.alertMessage('Please fill all fields', 'danger');
  } else {
    const user = new User(firstname, lastname, number);
    UI.addUserToList(user);
    UI.alertMessage('Added Successfully!', 'success');
    UI.clearFields();
  }
});

document.querySelector('#user_list').addEventListener('click', (e) => {
  UI.deleteUser(e.target);
  UI.alertMessage('Deleted Successfully!', 'success');
});
