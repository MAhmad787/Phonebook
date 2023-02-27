// Grab the Input
const searchInput = document.querySelector('#search');

searchInput.addEventListener('keyup', searchName);

function searchName() {
  // Get Value
  let searchValue = searchInput.value.toUpperCase();
  //   Get Users List
  const userList = document.querySelector('#users');
  //   Get User lis
  let users = userList.querySelectorAll('li.collection-item');
  //   Loop through and comparing
  for (let i = 0; i < users.length; i++) {
    let user = users[i].getElementsByTagName('h6')[0];
    if (user.innerHTML.toUpperCase().indexOf(searchValue) > -1) {
      users[i].style.display = '';
    } else {
      users[i].style.display = 'none';
    }
  }
}
