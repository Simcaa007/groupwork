function hodiny() {
    const datumObj = new Date();
    const posun = parseInt(localStorage.getItem("posun")) || 0;
    datumObj.setMinutes(datumObj.getMinutes() + posun);

    const h = datumObj.getHours().toString().padStart(2, '0');
    const m = datumObj.getMinutes().toString().padStart(2, '0');
    const s = datumObj.getSeconds().toString().padStart(2, '0');

    document.getElementById("hodiny").innerHTML = `${h}:${m}:${s}`;
}

hodiny();
setInterval(hodiny, 1000);
function datum() {
    const datumObj = new Date();
    const dny = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
    const mesice = ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"];
    const denCisla = datumObj.getDate();
    const mesic = datumObj.getMonth();
    const rok = datumObj.getFullYear();
    document.getElementById("datum").textContent = `${dny[datumObj.getDay()]} ${denCisla}. ${mesice[mesic]} ${rok}`;
}

datum();
setInterval(datum, 60000);

const ikona = document.getElementById("ikona-nastaveni");
const sidebar = document.querySelector(".sidebar");
const ulozitBtn = document.getElementById("ulozit");
const posunInput = document.getElementById("posun");

ikona.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});


ulozitBtn.addEventListener("click", () => {
    const posun = parseInt(posunInput.value) || 0;
    localStorage.setItem("posun", posun);
    zobrazAlert(`Nastavení uloženo: ${posun >= 0 ? '+' : ''}${posun} min`);
});


const alertEl = document.getElementById("alert");

function zobrazAlert(text) {
    alertEl.textContent = text;
    alertEl.style.display = "block";
    alertEl.style.opacity = "1";
    setTimeout(() => {
        alertEl.style.opacity = "0";
        setTimeout(() => alertEl.style.display = "none", 500);
    }, 2500);
}
