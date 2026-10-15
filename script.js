// Identitas mahasiswa. Kelas dan kelompok belum diberikan.
const student = {
  name: "Novita Agil Dyah Pramesti",
  nim: "G.231.25.0068",
  kelas: "Sore A",
  kelompok: "Belum diisi"
};

document.getElementById("heroName").textContent = student.name;
document.getElementById("profileName").textContent = student.name;
document.getElementById("profileNim").textContent = student.nim;
document.getElementById("profileClass").textContent = student.kelas;
document.getElementById("profileGroup").textContent = student.kelompok;
document.getElementById("year").textContent = new Date().getFullYear();

const initials = student.name.split(" ").filter(Boolean).slice(0, 2)
  .map(word => word[0].toUpperCase()).join("");
document.querySelector(".avatar-small").textContent = initials;

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  themeToggle.textContent = isLight ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", isLight ? "Aktifkan tema gelap" : "Aktifkan tema terang");
});
