

document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");

  function setErr(msg) { status.textContent = msg; status.className = "auth-status err"; }
  function setOk(msg) { status.textContent = msg; status.className = "auth-status ok"; }
  function setInfo(msg) { status.textContent = msg; status.className = "auth-status"; }

  document.getElementById("registerBtn").addEventListener("click", async () => {
    const username = document.getElementById("username").value.trim();
    const displayName = document.getElementById("displayNameInput").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !/^[a-zA-Z0-9_]{1,20}$/.test(username)) return setErr("Username must be 1-20 characters (A-Z, 0-9, _).");
    if (!displayName || displayName.length > 32) return setErr("Display name must be 1-32 characters.");
    if (!email || !email.includes("@")) return setErr("Enter a valid email address.");
    if (!password || password.length < 6) return setErr("Password must be at least 6 characters.");

    setInfo("Creating account…");

    try {
      const res = await fetch(`${API_BASE}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, displayName, email, password })
      });
      const data = await res.json();

      if (!res.ok) return setErr(data.error || "Registration failed.");

      setOk("Account created! Check your email to verify, then sign in.");
      setTimeout(() => location.href = "/login.html", 3000);
    } catch {
      setErr("Something went wrong. Try again.");
    }
  });

  document.getElementById("password").addEventListener("keydown", e => {
    if (e.key === "Enter") document.getElementById("registerBtn").click();
  });
});