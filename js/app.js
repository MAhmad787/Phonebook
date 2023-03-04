// User Class : Represent a User

class User {
  constructor(firstname, lastname, number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.number = number;
  }
}

// Store class
class Store {
  static getUsers() {
    let users;
    if (localStorage.getItem('users') === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem('users'));
    }
    return users;
  }
  static addUsers(user) {
    const users = Store.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  static removeUsers(number) {
    const users = Store.getUsers();
    books.forEach((user, index) => {
      if (user.number === number) {
      }
      users.splice(index, 1);
    });
    localStorage.setItem('users', JSON.stringify(users));
  }
}
// UI Class : Deals with all the UI Function
class UI {
  static displayUser() {
    const users = Store.getUsers();
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
    Store.addUsers(user);
    UI.alertMessage('Added Successfully!', 'success');
    UI.clearFields();
  }
});

document.querySelector('#user_list').addEventListener('click', (e) => {
  UI.deleteUser(e.target);
  UI.alertMessage('Deleted Successfully!', 'success');
});
