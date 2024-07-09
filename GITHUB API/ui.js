class UI {
  constructor() {
    this.userProfileDiv = document.getElementById("profile");
    this.repoDiv = document.getElementById("repos");
    this.lastUsers = document.getElementById("last-users");
    this.inputField = document.getElementById("githubname");
    this.cardBody = document.querySelector(".card-body");
  }

  clearInput() {
    this.inputField.value = "";
  }

  createUserDiv(user) {
    this.userProfileDiv.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.html_url}" target="_blank">
              <img class="img-fluid mb-2" src="${user.avatar_url}" alt="User Avatar"> 
            </a>
            <hr>
            <div id="fullName"><strong>${user.name}</strong></div>
            <hr>
            <div id="bio">${user.bio}</div>
          </div>
          <div class="col-md-8">
            <button class="btn btn-secondary">
              Followers: ${user.followers} <span class="badge badge-light"></span>
            </button>
            <button class="btn btn-info">
              Following: ${user.following} <span class="badge badge-light"></span>
            </button>
            <button class="btn btn-danger">
              Repositories: ${user.public_repos} <span class="badge badge-light"></span>
            </button>
            <hr>
            <ul class="list-group">
              <li class="list-group-item borderzero">
                <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
              </li>
              <li class="list-group-item borderzero">
                <img src="images/location.png" width="30px"> <span id="location">${user.location}</span>
              </li>
              <li class="list-group-item borderzero">
                <img src="images/mail.png" width="30px"> <span id="email">${user.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  showAlertBox(type, message) {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    this.cardBody.appendChild(alertDiv);
    setTimeout(() => {
      alertDiv.remove();
    }, 2000);
  }

  showRepos(repos) {
    this.repoDiv.innerHTML = "";
    repos.forEach((repo) => {
      this.repoDiv.innerHTML += `
        <div class="mb-2 card-body">
          <div class="row">
            <div class="col-md-2">
              <span></span> 
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <button class="btn btn-secondary">Stars <span class="badge badge-light">${repo.stargazers_count}</span></button>
              <button class="btn btn-info">Forks <span class="badge badge-light">${repo.forks_count}</span></button>
            </div>
          </div>
        </div>
      `;
    });
  }
}
