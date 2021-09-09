window.onload = function() {
  const selectCard = document.getElementById('selectCard').children;
  const lupa = document.getElementById('lupa');
  const menuLibrary = new Audio('./sfx/library.mp3');
  const infoTick = new Audio('./sfx/infotick.wav');
  const infoUp = new Audio('./sfx/infoup.wav');
  const infoDown = new Audio('./sfx/infodown.wav');
  const lupa = document.getElementById("lupa");
  const titleCard = document.querySelector("h1");
  const allCard = document.querySelectorAll(".back img");
  const write = document.querySelector(".txt");
  const comment = document.querySelector(".card-comment");
  const selectCard = document.getElementById("selectCard").children;
  //PLAY MUSIC
  menuLibrary.play();
  menuLibrary.loop = true;
  //ALL CARD
  for (let i = 0; i < allCard.length; i++) {
    titleCard.textContent = `<${i + 1}/100>`;
  }
  //STATUS CARD
  const statsCard = {
    blueEyesWhiteDragon: {
      id: 001,
      type: "Dragon",
      name: "Blue-eyes White Dragon"
    },
    timeWizard: {
      id: 016,
      type: "Spellcaster",
      name: "Time Wizard"
    },
    summonedSkull: {
      id: 022,
      type: "Fiend",
      name: "Summoned Skull"
    },
    darkMagician: {
      id: 035,
      type: "Spellcaster",
      name: "Dark Magician"
    },
    kuriboh: {
      id: 058,
      type: "Fiend",
      name: "Kuriboh"
    },
    harpieLady: {
      id: 062,
      type: "WingedBeast",
      name: "Harpie Lady"
    },
    giantSoldierOfStone: {
      id: 074,
      type: "Rock",
      name: "Giant Soldier of Stone"
    },
    redEyesBdragon: {
      id: 082,
      type: "Dragon",
      name: "Red-eyes B. Dragon"
    },
    pumpkingTheKingOfGhosts: {
      id: 099,
      type: "Zombie",
      name: "Pumpking the King of Ghosts"
    }
  };

  //ANIMATE
  document.addEventListener("mousemove", (e) => {
    let scrollY = window.pageYOffset;
    let scrollX = window.pageXOffset;
    let x = e.pageX + 10;
    let y = e.pageY + 11;
    if (scrollX !== 0) {
      x = e.pageX - scrollX + 10;
    }
    if (scrollY !== 0) {
      y = e.pageY - scrollY + 11;
    }
    lupa.style = "left:" + x + "px; top:" + y + "px;";
  });

  //TYPING WRITE
  /*let typingWrite = (txt) => {
    let i = 0;
    let loadWrite = setInterval(() => {
      write.innerHTML += txt.charAt(i);
      i++;
      if (i == txt.length) {
        clearInterval(loadWrite);
      }
    }, 30);
  };*/
  //CARD VIEW
  for (let i = 0; i < selectCard.length; i++) {
    selectCard[i].addEventListener("click", () => {
      let card = i + 1;
      if (card == 1) {
        if (selectCard[i].id == "active") {
          selectCard[i].id = "inactive";
          selectCard[i].classList.remove("card-view");
          infoDown.play();
        } else {
          selectCard[i].id = "active";
          selectCard[i].classList.add("card-view");
          infoUp.play();
        }
      }

      if (card == 16) {
        if (selectCard[i].id == "active") {
          selectCard[i].id = "inactive";
          selectCard[i].classList.remove("card-view");
          infoDown.play();
        } else {
          selectCard[i].id = "active";
          selectCard[i].classList.add("card-view");
          infoUp.play();
        }
      }

      if (card == 22) {
        if (selectCard[i].id == "active") {
          selectCard[i].id = "inactive";
          selectCard[i].classList.remove("card-view");
          infoDown.play();
        } else {
          selectCard[i].id = "active";
          selectCard[i].classList.add("card-view");
          infoUp.play();
        }
      }

      if (card == 35) {
        if (selectCard[i].id == "active") {
          selectCard[i].id = "inactive";
          selectCard[i].classList.remove("card-view");
          infoDown.play();
        } else {
          selectCard[i].id = "active";
          selectCard[i].classList.add("card-view");
          infoUp.play();
        }
      }

      if (card == 58) {
        if (selectCard[i].id == "active") {
          selectCard[i].id = "inactive";
          selectCard[i].classList.remove("card-view");
          infoDown.play();
        } else {
          selectCard[i].id = "active";
          selectCard[i].classList.add("card-view");
          infoUp.play();
        }
      }

      if (card == 62) {
        if (selectCard[i].id == "active") {
          selectCard[i].id = "inactive";
          selectCard[i].classList.remove("card-view");
          infoDown.play();
        } else {
          selectCard[i].id = "active";
          selectCard[i].classList.add("card-view");
          infoUp.play();
        }
      }

      if (card == 74) {
        if (selectCard[i].id == "active") {
          selectCard[i].id = "inactive";
          selectCard[i].classList.remove("card-view");
          infoDown.play();
        } else {
          selectCard[i].id = "active";
          selectCard[i].classList.add("card-view");
          infoUp.play();
        }
      }

      if (card == 82) {
        if (selectCard[i].id == "active") {
          selectCard[i].id = "inactive";
          selectCard[i].classList.remove("card-view");
          infoDown.play();
        } else {
          selectCard[i].id = "active";
          selectCard[i].classList.add("card-view");
          infoUp.play();
        }
      }

      if (card == 99) {
        if (selectCard[i].id == "active") {
          selectCard[i].id = "inactive";
          selectCard[i].classList.remove("card-view");
          infoDown.play();
        } else {
          selectCard[i].id = "active";
          selectCard[i].classList.add("card-view");
          infoUp.play();
        }
      }
    });
  }

  //INFO CARD VIEW
  for (let i = 0; i < selectCard.length; i++) {
    selectCard[i].addEventListener("mousemove", () => {
      let n = i + 1;
      switch (n) {
        case 1:
          comment.innerHTML = `
          <p>00${n}</p>
          <h3>${statsCard.blueEyesWhiteDragon.name}</h3>`;
          break;
        case 16:
          comment.innerHTML = `
          <p>0${n}</p>
          <h3>${statsCard.timeWizard.name}</h3>`;
          break;
        case 22:
          comment.innerHTML = `
          <p>0${n}</p>
          <h3>${statsCard.summonedSkull.name}</h3>`;
          break;
        case 35:
          comment.innerHTML = `
          <p>0${n}</p>
          <h3>${statsCard.darkMagician.name}</h3>`;
          break;
        case 58:
          comment.innerHTML = `
          <p>0${n}</p>
          <h3>${statsCard.kuriboh.name}</h3>`;
          break;
        case 62:
          comment.innerHTML = `
          <p>0${n}</p>
          <h3>${statsCard.harpieLady.name}</h3>`;
          break;
        case 74:
          comment.innerHTML = `
          <p>0${n}</p>
          <h3>${statsCard.giantSoldierOfStone.name}</h3>`;
          break;
        case 82:
          comment.innerHTML = `
          <p>0${n}</p>
          <h3>${statsCard.redEyesBdragon.name}</h3>`;
          break;
        case 99:
          comment.innerHTML = `
          <p>0${n}</p>
          <h3>${statsCard.pumpkingTheKingOfGhosts.name}</h3>`;
          break;
        default:
          if (n <= 9) {
            comment.innerHTML = `
          <p>00${n}</p>
          <h3>Select Card</h3>`;
          } else {
            comment.innerHTML = `
          <p>0${n}</p>
          <h3>Select Card</h3>`;
          }
          if (n == 100) {
            comment.innerHTML = `
          <p>${n}</p>
          <h3>Select Card</h3>`;
          }
          break;
      }
    });
    comment.innerHTML = `
          <p>000</p>
          <h3>Select Card</h3>`;
  }
};