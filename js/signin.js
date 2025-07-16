const loginForm = document.getElementById("login-form");
const messageEl = document.getElementById("message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const loginUser = {
    email: event.target.email.value,
    password: event.target.password.value,
  };

  fetchLogin(loginUser);
});

async function fetchLogin(loginUser) {
 
  const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(loginUser),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    messageEl.textContent = "Login successful";
  } else {
    messageEl.textContent = "Login error!";
  }
}
