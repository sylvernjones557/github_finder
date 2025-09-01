const gg = new Git();

document.querySelector("#github-form").addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const input = document.getElementById("username").value.trim();
    if (!input) {
        alert("Please enter a GitHub username");
        return;
    }

    gg.get(input)
      .then(res => {
        const display = document.querySelector(".container_display");

        // Handle invalid username
        if (res.message === "Not Found") {
          display.innerHTML = `<p class="text-danger">❌ User not found</p>`;
          return;
        }

        // Show profile card
        display.innerHTML = `
          <div class="card shadow-lg mx-auto my-3" style="width: 22rem;">
            <img src="${res.avatar_url}" class="card-img-top" alt="GitHub Profile Picture">
            <div class="card-body text-center">
              <h5 class="card-title">${res.name || res.login}</h5>
              <p class="card-text text-muted">${res.bio || "No bio available"}</p>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item"><strong>User Name:</strong> ${res.login}</li>
                <li class="list-group-item"><strong>Public Repos:</strong> ${res.public_repos}</li>
                <li class="list-group-item"><strong>Followers:</strong> ${res.followers}</li>
                <li class="list-group-item"><strong>Following:</strong> ${res.following}</li>
              </ul>
              <a href="${res.html_url}" target="_blank" class="btn btn-dark mt-3">
                View Profile
              </a>
            </div>
          </div>
        `;
      })
      .catch(err => console.error(err));
});
