

document.getElementById("loginBtn").addEventListener("click", async () => {
  const usernameOrEmail = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const status = document.getElementById("status");

  function setErr(msg) { status.textContent = msg; status.className = "auth-status err"; }
  function setOk(msg) { status.textContent = msg; status.className = "auth-status ok"; }

  if (!usernameOrEmail || !password) return setErr("Please fill in all fields.");

  const hcaptchaToken = document.querySelector('[name="h-captcha-response"]')?.value;
  if (!hcaptchaToken) return setErr("Please complete the CAPTCHA.");

  try {
    const res = await fetch(`${API_BASE}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernameOrEmail, password, hcaptchaToken })
    });
    const data = await res.json();
    if (!res.ok) return setErr(data.error || "Invalid credentials.");

    localStorage.setItem("authToken", data.token);
    setOk("Signing in…");
    setTimeout(() => location.href = "/index.html", 900);
  } catch (err) {
    setErr("Something went wrong. Try again.");
  }
});

document.getElementById("password").addEventListener("keydown", e => {
  if (e.key === "Enter") document.getElementById("loginBtn").click();
});

(async () => {
  const params = new URLSearchParams(location.search);
  if (params.get("verified")) {
    const status = document.getElementById("status");
    status.textContent = "Email verified! You can now sign in.";
    status.className = "auth-status ok";
  }
  const me = await getMe?.();
  if (me) location.href = "/index.html";
})();