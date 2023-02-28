const addUserBtn = document.querySelector('#addUserBtn');
const userList = document.querySelector('.users');
const addUserInput = document.querySelector('#addUserInput');

addUserBtn.addEventListener('click', addUsers);

function addUsers() {
  const user = document.createElement('li');
  user.classList.add('collection-item');
  const userData = `
  <h6>${addUserInput.value}</h6>
  <button class='delete-user'>X</button>
  `;
  user.insertAdjacentHTML('afterBegin', userData);

  userList.appendChild(user);
  const removeUserBtn = document.querySelector('.delete-user');
  addUserInput.value = '';
  user.addEventListener('click', () => {
    // Get the list
    // const myList = document.getElementById('userList');

    // Get all the list items

    // Loop through the list items and add a click event listener to each one
    user.forEach(function (listItem) {
      // Get the close button for this list item
      const closeButton = document.querySelector('.delete-user');

      // Add a click event listener to the close button
      closeButton.addEventListener('click', function () {
        // Remove the parent element (the list item) from the list
        listItem.remove();
        console.log('hello');
      });
    });
  });
  //   if (addUserInput.value != '' && addUserInput.value != ' ') {
  //   } else {
  //     alert('please fill the field');
  //   }
}
