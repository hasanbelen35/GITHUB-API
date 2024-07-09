class Storage {
  constructor() {
    this.lastUsers = document.getElementById("last-users");
  }

  getUsersFromStorage() {
    let users;
    if (localStorage.getItem("searched") === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("searched"));
    }
    return users;
  }

  addUsersToStorage(username) {
    let users = this.getUsersFromStorage();
    if (users.indexOf(username) === -1) {
      users.push(username);
    }
    localStorage.setItem("searched", JSON.stringify(users));

    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = username;

    this.lastUsers.appendChild(li);
  }

  removeUsersFromStorage() {
    localStorage.removeItem("searched");
    this.lastUsers.innerHTML = "";
  }
}
