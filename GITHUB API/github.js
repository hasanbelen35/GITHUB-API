class Github {
  constructor() {
    this.BASE_URL = "https://api.github.com/users/";
    this.token = "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";
  }
  async getApiDatas(username) {
    const headers = {
      Authorization: `token ${this.token}`,
    };

    const responseUser = await fetch(this.BASE_URL + username, { headers });
    const responseRepos = await fetch(this.BASE_URL + username + "/repos", {
      headers,
    });

    const userData = await responseUser.json();
    const reposData = await responseRepos.json();

    return {
      users: userData,
      repos: reposData,
    };
  }
}
