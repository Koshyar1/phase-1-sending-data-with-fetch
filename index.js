function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch");
      }
    })
    .then((data) => {
      const newId = document.createElement("p");
      newId.textContent = `New user ID: ${data.id}`;
      document.body.appendChild(newId);
    })
    .catch((error) => {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorMessage);
    });
}
