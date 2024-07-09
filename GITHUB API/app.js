// DEFINE ITEMS
const form = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastSearched = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();
const storage = new Storage();

// CREATE EVENT FUNC
eventListeners();

function eventListeners() {
  form.addEventListener("submit", getDatas);
  clearLastSearched.addEventListener("click", clearAllSearchedUsers);
  document.addEventListener("DOMContentLoaded", getAllSearchedUsers);
}

function getDatas(e) {
  let username = nameInput.value.trim();
  if (username === "") {
    ui.showAlertBox("danger", "Please enter a username!");
  } else {
    github
      .getApiDatas(username)
      .then((response) => {
        if (response.users.message === "Not Found") {
          ui.showAlertBox("danger", "User not found!");
          ui.clearInput();
        } else {
          ui.createUserDiv(response.users);
          ui.showAlertBox("success", "User displayed successfully!");
          ui.clearInput();
          ui.showRepos(response.repos);
          storage.addUsersToStorage(username);
        }
      })
      .catch((err) => ui.showAlertBox("danger", err));
  }
  e.preventDefault();
}

function clearAllSearchedUsers() {
  storage.removeUsersFromStorage();
  lastUsers.innerHTML = "";
}

function getAllSearchedUsers() {
  const users = storage.getUsersFromStorage();
  users.forEach((username) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = username;
    lastUsers.appendChild(li);
  });
}
