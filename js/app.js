//Mover lupa
var lupa = document.getElementById("lupa");
document.addEventListener("mousemove", (e) => {
  var x = e.pageX + 10;
  var y = e.pageY + 11;
  lupa.style = "left:" + x + "px; top:" + y + "px;";
});

//Menu libreria selección
const content = document.querySelector(".card-content").children;
const txt = document.querySelector(".txt");
for (let i = 0; i < content.length; i++) {
  content[i].addEventListener("mousemove", () => {
    if (i == 0) {
      txt.innerHTML = `
          <p>0${i}</p>
          <h3>Advertencia Solemne</h3>
          `;
    } else if (i == 13) {
      txt.innerHTML = `
          <p>0${i}</p>
          <h3>Chica Maga Oscura</h3>
          `;
    } else if (i == 34) {
      txt.innerHTML = `
          <p>0${i}</p>
          <h3>Agujero Oscuro</h3>
          `;
    } else if (i == 49) {
      txt.innerHTML = `
          <p>0${i}</p>
          <h3>Mago del Tiempo</h3>
          `;
    } else if (i == 51) {
      txt.innerHTML = `
          <p>0${i}</p>
          <h3>Caballero del Cráneo</h3>
          `;
    } else if (i == 62) {
      txt.innerHTML = `
          <p>0${i}</p>
          <h3>Olla de la Codicia</h3>
          `;
    } else if (i == 74) {
      txt.innerHTML = `
          <p>0${i}</p>
          <h3>Mago Oscuro</h3>
          `;
    } else if (i == 77) {
      txt.innerHTML = `
          <p>0${i}</p>
          <h3>Waboku</h3>
          `;
    } else if (i == 99) {
      txt.innerHTML = `
          <p>0${i}</p>
          <h3>Dragón Blanco de Ojos Azules</h3>
          `;
    } else {
      txt.innerHTML = `
          <p>0${i}</p>
          <h3></h3>`;
    }
  });
}

//Dirección scroll
/*var x, y;

function handleMouse(e) {
  if (x && y) {
    window.scrollBy(e.clientX - x, e.clientY - y);
  }
  x = e.clientX;
  y = e.clientY;
}

document.onmousemove = handleMouse;*/
