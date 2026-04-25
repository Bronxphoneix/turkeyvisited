const STORAGE_KEY = "mindknit_state_v1";
const SESSION_KEY = "mindknit_session_v1";

let state = null;
let session = null;

async function loadState() {
  const cached = localStorage.getItem(STORAGE_KEY);
  if (cached) {
    state = JSON.parse(cached);
    return;
  }
  const res = await fetch("mindknit-data.json");
  state = await res.json();
  saveState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadSession() {
  const raw = sessionStorage.getItem(SESSION_KEY);
  session = raw ? JSON.parse(raw) : null;
}

function setSession(user) {
  session = user;
  if (user) sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  else sessionStorage.removeItem(SESSION_KEY);
}

function login(username) {
  const user = state.users.find(u => u.username === username.trim());
  if (!user) {
    alert("Kullanıcı bulunamadı: " + username);
    return;
  }
  setSession(user);
  render();
}

function logout() {
  setSession(null);
  render();
}

function addRecord(itemId, date, note) {
  if (!session) return;
  state.maintenance.push({
    itemId,
    user: session.username,
    date,
    note: note.trim()
  });
  saveState();
  render();
}

function renderUserArea() {
  const el = document.getElementById("mk-user-area");
  if (session) {
    el.innerHTML = `<span>${session.username} (${session.role})</span> <button id="mk-logout">Çıkış</button>`;
    document.getElementById("mk-logout").onclick = logout;
  } else {
    el.innerHTML = `
      <div class="mk-login">
        <input id="mk-login-name" placeholder="Kullanıcı adı" />
        <button id="mk-login-btn">Giriş</button>
      </div>`;
    document.getElementById("mk-login-btn").onclick = () =>
      login(document.getElementById("mk-login-name").value);
  }
}

function recordsForItem(itemId) {
  return state.maintenance
    .filter(r => r.itemId === itemId)
    .sort((a, b) => b.date.localeCompare(a.date));
}

function renderItems() {
  const app = document.getElementById("mk-app");
  app.innerHTML = "";
  for (const item of state.items) {
    const card = document.createElement("div");
    card.className = "mk-card";
    const records = recordsForItem(item.id);
    const recordsHtml = records.length
      ? `<ul class="mk-records">${records.map(r => `
          <li>
            <span class="mk-date">${r.date}</span>
            <span class="mk-user">${r.user}</span>
            ${escapeHtml(r.note)}
          </li>`).join("")}</ul>`
      : `<p><em>Kayıt yok.</em></p>`;

    const formHtml = session ? `
      <form class="mk-form" data-item="${item.id}">
        <input type="date" name="date" required />
        <input type="text" name="note" placeholder="Bakım notu" required />
        <button type="submit">Kayıt Ekle</button>
      </form>` : "";

    card.innerHTML = `
      <h2>${escapeHtml(item.name)}</h2>
      ${recordsHtml}
      ${formHtml}
    `;
    app.appendChild(card);
  }

  for (const form of document.querySelectorAll(".mk-form")) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const itemId = form.dataset.item;
      const date = form.elements.date.value;
      const note = form.elements.note.value;
      addRecord(itemId, date, note);
    });
  }
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function render() {
  renderUserArea();
  renderItems();
}

(async function init() {
  await loadState();
  loadSession();
  render();
})();
