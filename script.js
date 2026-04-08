const API_BASE = "https://housingbase-71z.onrender.com";

const CATEGORIES = ["general","minigames","pvp","showcase","tools","moderation","other"];

const SVG = {
  xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  download:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  trash:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`,
  heart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  "heart-filled":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  search:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  folder:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 21v-1a4 4 0 0 0-8 0v1"/><circle cx="12" cy="11" r="3"/></svg>`,
  "arrow-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  "arrow-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  "external-link":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  warning:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  lock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  link:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  globe:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  camera:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  pen:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  "sign-out":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  "circle-check":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  "circle-x":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  info:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  "file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="10 13 8 15 10 17"/><polyline points="14 13 16 15 14 17"/></svg>`,
  inbox:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
  bullhorn:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h20l-4 6 4 5z"/><path d="M6 17v1a3 3 0 0 0 6 0v-1"/></svg>`,
  wrench:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  gamepad:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>`,
  shield:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  masks:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/></svg>`,
  star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  box:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
  layers:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  run:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2"/><path d="M5 21l4-7 3 3 2-4 3 7"/><path d="M9 14l-2-5 5-2 2 4"/></svg>`,
  check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
};

const CATEGORY_ICONS = {
  general:"layers", minigames:"gamepad",
  pvp:"shield", showcase:"star",
  tools:"wrench", moderation:"lock", other:"box"
};

function icon(name, size=16) {
  const s = SVG[name] || SVG.box;
  const el = document.createElement("span");
  el.className = "hb-icon";
  el.style.cssText = `display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px;flex-shrink:0;vertical-align:middle;`;
  el.innerHTML = s;
  return el;
}

function iconHTML(name, size=16) {
  const s = SVG[name] || SVG.box;
  return `<span class="hb-icon" style="display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px;flex-shrink:0;vertical-align:middle;">${s}</span>`;
}

async function getMe() {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) return null;
    const res = await fetch(`${API_BASE}/api/me`, { headers:{ Authorization:`Bearer ${token}` } });
    if (!res.ok) return null;
    return await res.json();
  } catch { return null; }
}

function avatarURL(p) {
  if (!p) return `${API_BASE}/uploads/avatars/default.png`;
  if (p.startsWith("http")) return p;
  return `${API_BASE}/${p.replace(/^\/?/, "")}`;
}

function renderAuth(user) {
  const out = document.getElementById("logged-out");
  const inn = document.getElementById("logged-in");
  const av  = document.getElementById("avatarSmall");
  const dn  = document.getElementById("displayName");
  if (user) {
    if (out) out.style.display = "none";
    if (inn) inn.style.display = "flex";
    if (av) { av.src = avatarURL(user.avatar); av.onclick = () => location.href = `/profile.html?user=${user.username}`; }
    if (dn) { dn.textContent = user.displayName || user.username; dn.style.display = "inline"; dn.onclick = () => location.href = `/profile.html?user=${user.username}`; }
  } else {
    if (out) out.style.display = "flex";
    if (inn) inn.style.display = "none";
    if (dn)  dn.style.display = "none";
  }
}

async function loadAnnouncement() {
  try {
    const token = localStorage.getItem("authToken");
    const res = await fetch(`${API_BASE}/api/announcement`, { headers:{ Authorization:`Bearer ${token||""}` } });
    if (!res.ok) return;
    const data = await res.json();
    const box = document.getElementById("announcement");
    if (!box) return;
    if (data?.text) {
      box.style.cssText = `display:block;background:${data.bg_color||"#92400e"};color:${data.text_color||"#fef3c7"};padding:9px 1.5rem;text-align:center;font-size:0.88rem;font-weight:600;position:fixed;top:56px;left:0;right:0;z-index:99;`;
      box.textContent = data.text;
    } else {
      box.style.display = "none";
    }
  } catch {}
}

function showToast(msg, type="success") {
  let c = document.getElementById("toast-container");
  if (!c) {
    c = document.createElement("div");
    c.id = "toast-container";
    c.style.cssText = "position:fixed;bottom:20px;right:20px;display:flex;flex-direction:column;gap:8px;z-index:9999;pointer-events:none;";
    document.body.appendChild(c);
  }
  const colors = { success:"#4ade80", error:"#f87171", info:"#90b8ff" };
  const icons  = { success:"circle-check", error:"circle-x", info:"info" };
  const t = document.createElement("div");
  t.style.cssText = `display:flex;align-items:center;gap:9px;background:rgba(10,10,10,0.97);border:1px solid rgba(255,255,255,0.08);border-left:3px solid ${colors[type]||colors.success};border-radius:9px;padding:10px 14px;color:#e8e8e8;font-size:0.85rem;font-family:'Inter',sans-serif;box-shadow:0 8px 24px rgba(0,0,0,0.5);transform:translateX(110%);transition:transform 0.32s cubic-bezier(0.16,1,0.3,1);max-width:300px;min-width:180px;pointer-events:auto;`;
  const ic = icon(icons[type]||"circle-check", 15);
  ic.style.color = colors[type]||colors.success;
  ic.style.flexShrink = "0";
  t.appendChild(ic);
  t.appendChild(document.createTextNode(msg));
  c.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => { t.style.transform = "translateX(0)"; }));
  setTimeout(() => { t.style.transform = "translateX(110%)"; t.addEventListener("transitionend", () => t.remove(), { once:true }); }, 3500);
}

function openModal(a, me) {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;
  document.getElementById("modal-title").textContent = a.name;
  document.getElementById("modal-desc").textContent = a.description || "No description provided.";
  document.getElementById("modal-download").href = `${API_BASE}/api/addons/${a.id||a._id}/download`;
  const pre = document.getElementById("modal-pre");
  if (pre) pre.textContent = "Loading…";
  overlay.classList.add("show");
  const token = localStorage.getItem("authToken");
  fetch(`${API_BASE}/api/addons/${a.id||a._id}/contents`, { headers:{ Authorization:`Bearer ${token||""}` } })
    .then(r => r.json()).then(d => { if (pre) pre.textContent = d.content||"(empty)"; })
    .catch(() => { if (pre) pre.textContent = "(failed to load)"; });
}

function closeModal() { document.getElementById("modal-overlay")?.classList.remove("show"); }

let _deleteCallback = null;

function confirmDelete(name, onConfirm) {
  _deleteCallback = onConfirm;
  const overlay = document.getElementById("del-confirm-overlay");
  const desc = document.getElementById("del-confirm-desc");
  if (!overlay) return;
  if (desc) desc.textContent = `"${name}" will be permanently removed.`;
  overlay.classList.add("show");
}

function closeDeleteModal() { document.getElementById("del-confirm-overlay")?.classList.remove("show"); _deleteCallback = null; }

function escapeHTML(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function formatDate(ts) { if (!ts) return ""; return new Date(ts).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}); }
function stripColorCodes(t) { return String(t).replace(/§[0-9A-FK-ORa-fk-or]/g,""); }

function buildAddonCard(a, me) {
  const id = a.id || a._id;
  const isOwner = me && (me.username === a.username || me.is_admin);
  const token = localStorage.getItem("authToken");
  const catIconName = CATEGORY_ICONS[a.category] || "box";

  const card = document.createElement("div");
  card.className = "addon-card";

  const inner = document.createElement("div");
  inner.className = "ac-inner";
  card.appendChild(inner);

  const topRow = document.createElement("div");
  topRow.className = "ac-top-row";

  if (a.category) {
    const cb = document.createElement("span");
    cb.className = "category-badge";
    cb.appendChild(icon(catIconName, 10));
    cb.appendChild(document.createTextNode(" " + a.category));
    topRow.appendChild(cb);
  }
  if (a.visibility === "unlisted") {
    const vb = document.createElement("span");
    vb.className = "category-badge vis-badge-unlisted";
    vb.appendChild(icon("link", 10));
    vb.appendChild(document.createTextNode(" Unlisted"));
    topRow.appendChild(vb);
  }
  if (a.visibility === "private") {
    const vb = document.createElement("span");
    vb.className = "category-badge vis-badge-private";
    vb.appendChild(icon("lock", 10));
    vb.appendChild(document.createTextNode(" Private"));
    topRow.appendChild(vb);
  }
  inner.appendChild(topRow);

  const h4 = document.createElement("h4");
  h4.className = "ac-name";
  h4.textContent = a.name;
  inner.appendChild(h4);

  const desc = document.createElement("p");
  desc.className = "ac-desc";
  desc.textContent = a.short_description || "";
  inner.appendChild(desc);

  const bottom = document.createElement("div");
  bottom.className = "ac-bottom";

  const metaLeft = document.createElement("div");
  metaLeft.className = "ac-meta-left";
  const avImg = document.createElement("img");
  avImg.src = avatarURL(a.avatar);
  avImg.width = 16; avImg.height = 16;
  avImg.style.cssText = "border-radius:3px;flex-shrink:0;";
  const uLink = document.createElement("a");
  uLink.href = `/profile.html?user=${escapeHTML(a.username)}`;
  uLink.textContent = "@" + (a.displayName || a.username);
  uLink.className = "user-link ac-user";
  uLink.onclick = e => e.stopPropagation();
  metaLeft.appendChild(avImg);
  metaLeft.appendChild(uLink);
  bottom.appendChild(metaLeft);

  const dateSpan = document.createElement("span");
  dateSpan.className = "ac-date";
  dateSpan.textContent = formatDate(a.created_at);
  bottom.appendChild(dateSpan);

  inner.appendChild(bottom);

  const btnRow = document.createElement("div");
  btnRow.className = "ac-btn-row";

  const myId = me?._id || me?.id || null;
  const likedByArr = Array.isArray(a.liked_by) ? a.liked_by : [];
  let liked = myId ? likedByArr.includes(myId) : false;
  const likeBtn = document.createElement("button");
  likeBtn.className = "icon-btn ac-like";
  likeBtn.title = "Like";
  likeBtn.appendChild(icon("heart", 13));
  likeBtn.addEventListener("click", async e => {
    e.stopPropagation();
    if (!me) { showToast("Sign in to like projects", "info"); return; }
    const endpoint = liked ? "unlike" : "like";
    try {
      const r = await fetch(`${API_BASE}/api/addons/${id}/${endpoint}`, { method:"POST", headers:{ Authorization:`Bearer ${token}` } });
      const d = await r.json();
      if (r.ok) {
        liked = !liked;
        likeBtn.innerHTML = "";
        likeBtn.appendChild(icon(liked ? "heart-filled" : "heart", 13));
        if (liked) { likeBtn.style.cssText += "color:#f472b6;border-color:rgba(236,72,153,0.4);background:rgba(236,72,153,0.12);"; }
        else { likeBtn.style.color = ""; likeBtn.style.borderColor = ""; likeBtn.style.background = ""; }
      } else showToast(d.error||"Failed","error");
    } catch { showToast("Network error","error"); }
  });
  btnRow.appendChild(likeBtn);

  const dlBtn = document.createElement("a");
  dlBtn.href = `${API_BASE}/api/addons/${id}/download`;
  dlBtn.className = "icon-btn";
  dlBtn.title = "Download";
  dlBtn.onclick = e => e.stopPropagation();
  dlBtn.appendChild(icon("download", 13));
  btnRow.appendChild(dlBtn);

  const viewBtn = document.createElement("a");
  viewBtn.href = `/addon.html?id=${id}`;
  viewBtn.className = "icon-btn";
  viewBtn.title = "View page";
  viewBtn.onclick = e => e.stopPropagation();
  viewBtn.appendChild(icon("external-link", 13));
  btnRow.appendChild(viewBtn);

  if (isOwner) {
    const delBtn = document.createElement("button");
    delBtn.className = "icon-btn del";
    delBtn.title = "Delete";
    delBtn.appendChild(icon("trash", 13));
    delBtn.addEventListener("click", e => {
      e.stopPropagation();
      confirmDelete(a.name, async () => {
        const r = await fetch(`${API_BASE}/api/addons/${id}`, { method:"DELETE", headers:{ Authorization:`Bearer ${token}` } });
        if (r.status === 204) { showToast("Project deleted"); loadAddons(); }
        else showToast("Failed to delete","error");
      });
    });
    btnRow.appendChild(delBtn);
  }
  card.appendChild(btnRow);

  card.addEventListener("click", e => {
    if (e.target.closest("a")||e.target.tagName==="BUTTON"||e.target.closest("button")) return;
    location.href = `/addon.html?id=${id}`;
  });
  return card;
}

async function loadAddons() {
  const me = await getMe();
  renderAuth(me);
  const container = document.getElementById("addon-list");
  if (!container) return;

  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const search   = params.get("q") || "";
  const sort     = params.get("sort") || "";
  const version  = params.get("game_version");

  const query = new URLSearchParams();
  if (category && category !== "all") query.set("category", category);
  if (search) query.set("search", search);
  if (sort)   query.set("sort", sort);
  if (version) query.set("game_version", version);

  container.innerHTML = Array(6).fill(0).map(() => `
    <div class="addon-card" style="pointer-events:none;">
      <div class="ac-inner">
        <div class="ac-top-row"><div class="skeleton" style="height:18px;width:70px;border-radius:99px;"></div></div>
        <div class="skeleton ac-name" style="height:15px;width:55%;margin-top:6px;border-radius:5px;"></div>
        <div class="skeleton" style="height:11px;width:80%;margin-top:6px;border-radius:5px;"></div>
        <div class="skeleton" style="height:11px;width:80%;margin-top:4px;border-radius:5px;"></div>
        <div class="ac-bottom" style="margin-top:auto;padding-top:8px;"><div class="skeleton" style="height:11px;width:40%;border-radius:5px;"></div></div>
      </div>
    </div>`).join("");

  try {
    const token = localStorage.getItem("authToken");
    const res = await fetch(`${API_BASE}/api/addons?${query}`, { headers:{ Authorization:`Bearer ${token||""}` } });
    if (!res.ok) throw new Error();
    const addons = await res.json();
    const countEl = document.getElementById("addon-count");
    if (countEl) countEl.textContent = addons.length;
    container.innerHTML = "";
    if (!addons.length) {
      container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:#333;">${iconHTML("inbox",32)}<p style="margin-top:0.8rem;">No projects found</p></div>`;
      return;
    }
    addons.forEach(a => container.appendChild(buildAddonCard(a, me)));
  } catch {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:#333;">${iconHTML("warning",32)}<p style="margin-top:0.8rem;">Failed to load</p></div>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("active");
  });
  document.getElementById("modal-close")?.addEventListener("click", closeModal);
  document.getElementById("modal-overlay")?.addEventListener("click", e => { if (e.target.id === "modal-overlay") closeModal(); });
  document.getElementById("del-confirm-close")?.addEventListener("click", closeDeleteModal);
  document.getElementById("del-confirm-no")?.addEventListener("click", closeDeleteModal);
  document.getElementById("del-confirm-yes")?.addEventListener("click", () => { closeDeleteModal(); if (_deleteCallback) _deleteCallback(); });
  document.getElementById("del-confirm-overlay")?.addEventListener("click", e => { if (e.target.id === "del-confirm-overlay") closeDeleteModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeModal(); closeDeleteModal(); } });
});

(async () => {
  const me = await getMe();
  renderAuth(me);
  await loadAnnouncement();
  if (document.getElementById("addon-list")) {
    await loadAddons();
    const searchInput = document.querySelector(".cf-search input");
    const sortSel = document.getElementById("cf-sort");
    let searchTimer;
    function applyFilters() {
      const p = new URLSearchParams(location.search);

      const q = searchInput?.value.trim();
      if (q) p.set("q", q); else p.delete("q");

      if (sortSel?.value) p.set("sort", sortSel.value); else p.delete("sort");

      const versionSel = document.getElementById("cf-version");
      if (versionSel?.value) p.set("game_version", versionSel.value);
      else p.delete("game_version");

      history.replaceState(null, "", `${location.pathname}?${p}`);
      loadAddons();
    }
    searchInput?.addEventListener("input", () => { clearTimeout(searchTimer); searchTimer = setTimeout(applyFilters, 350); });
    sortSel?.addEventListener("change", applyFilters);
    const p = new URLSearchParams(location.search);
    if (searchInput && p.get("q")) searchInput.value = p.get("q");
    if (sortSel && p.get("sort")) sortSel.value = p.get("sort");
    const versionSel = document.getElementById("cf-version");
    if (versionSel && p.get("game_version")) versionSel.value = p.get("game_version");
    versionSel?.addEventListener("change", () => {
      const p2 = new URLSearchParams(location.search);
      if (versionSel.value) p2.set("game_version", versionSel.value); else p2.delete("game_version");
      history.replaceState(null, "", `${location.pathname}?${p2}`);
      loadAddons();
    });
    document.querySelectorAll(".cf-side-list a[href]").forEach(a => {
      const url = new URL(a.href, location.href);
      const cat = url.searchParams.get("category");
      const cur = p.get("category") || "all";
      a.classList.toggle("active", (cat||"all") === cur);
    });
  }
})();