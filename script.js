const form = document.getElementById("randevuForm");
const liste = document.getElementById("randevuListesi");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value;
  const phone = form.phone.value;
  const date = form.date.value;
  const time = form.time.value;

  const randevu = { name, phone, date, time };

  const mevcut = JSON.parse(localStorage.getItem("randevular") || "[]");
  mevcut.push(randevu);
  localStorage.setItem("randevular", JSON.stringify(mevcut));

  form.reset();
  listele();
});

function listele() {
  liste.innerHTML = "";
  const randevular = JSON.parse(localStorage.getItem("randevular") || "[]");
  randevular.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = `${r.date} ${r.time} - ${r.name}`;
    liste.appendChild(li);
  });
}

window.onload = listele;
