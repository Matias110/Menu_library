window.onload = function() {
  const selectCard = document.getElementById('selectCard').children;
  const lupa = document.getElementById('lupa');
  const menuLibrary = new Audio('./sfx/library.mp3');
  const infoTick = new Audio('./sfx/infotick.wav');
  const infoUp = new Audio('./sfx/infoup.wav');
  const infoDown = new Audio('./sfx/infodown.wav');
  menuLibrary.play();
  menuLibrary.loop = true;
  //LUPA ANIMATE
  document.addEventListener("mousemove", (e) => {
    let scrollY = window.pageYOffset;
    let scrollX = window.pageXOffset;
    let x = e.pageX + 10;
    let y = e.pageY + 11;
    if (scrollX !== 0) {
      x = (e.pageX - scrollX) + 10;
    }
    if (scrollY !== 0) {
      y = (e.pageY - scrollY) + 11;
    }
    lupa.style = "left:" + x + "px; top:" + y + "px;";
  });
  //CARD VIEW
  let selectOfCard = (() => {
    for (let i = 0; i < selectCard.length; i++) {
      selectCard[i].addEventListener('click', () => {
        let num = i + 1;
        if (num == 1) {
          if (selectCard[i].id == 'active') {
            selectCard[i].id = 'inactive';
            selectCard[i].classList.remove('card-view');
            infoDown.play();
          } else {
            selectCard[i].id = 'active';
            selectCard[i].classList.add('card-view');
            infoUp.play();
          }
        }
        if (num == 16) {
          if (selectCard[i].id == 'active') {
            selectCard[i].id = 'inactive';
            selectCard[i].classList.remove('card-view');
            infoDown.play();
          } else {
            selectCard[i].id = 'active';
            selectCard[i].classList.add('card-view');
            infoUp.play();
          }
        }
        if (num == 22) {
          if (selectCard[i].id == 'active') {
            selectCard[i].id = 'inactive';
            selectCard[i].classList.remove('card-view');
            infoDown.play();
          } else {
            selectCard[i].id = 'active';
            selectCard[i].classList.add('card-view');
            infoUp.play();
          }
        }
        if (num == 35) {
          if (selectCard[i].id == 'active') {
            selectCard[i].id = 'inactive';
            selectCard[i].classList.remove('card-view');
            infoDown.play();
          } else {
            selectCard[i].id = 'active';
            selectCard[i].classList.add('card-view');
            infoUp.play();
          }
        }
        if (num == 58) {
          if (selectCard[i].id == 'active') {
            selectCard[i].id = 'inactive';
            selectCard[i].classList.remove('card-view');
            infoDown.play();
          } else {
            selectCard[i].id = 'active';
            selectCard[i].classList.add('card-view');
            infoUp.play();
          }
        }
        if (num == 62) {
          if (selectCard[i].id == 'active') {
            selectCard[i].id = 'inactive';
            selectCard[i].classList.remove('card-view');
            infoDown.play();
          } else {
            selectCard[i].id = 'active';
            selectCard[i].classList.add('card-view');
            infoUp.play();
          }
        }
        if (num == 74) {
          if (selectCard[i].id == 'active') {
            selectCard[i].id = 'inactive';
            selectCard[i].classList.remove('card-view');
            infoDown.play();
          } else {
            selectCard[i].id = 'active';
            selectCard[i].classList.add('card-view');
            infoUp.play();
          }
        }
        if (num == 82) {
          if (selectCard[i].id == 'active') {
            selectCard[i].id = 'inactive';
            selectCard[i].classList.remove('card-view');
            infoDown.play();
          } else {
            selectCard[i].id = 'active';
            selectCard[i].classList.add('card-view');
            infoUp.play();
          }
        }
        if (num == 99) {
          if (selectCard[i].id == 'active') {
            selectCard[i].id = 'inactive';
            selectCard[i].classList.remove('card-view');
            infoDown.play();
          } else {
            selectCard[i].id = 'active';
            selectCard[i].classList.add('card-view');
            infoUp.play();
          }
        }
      });
    }
  });
  //COMMENT CARD
  let seletCommentOfCard = (() => {
    const selectComment = document.getElementById('selectCard').children;
    const comment = document.querySelector('.card-comment');
    for (let i = 0; i < selectComment.length; i++) {
      selectComment[i].addEventListener('mousemove', () => {
        let num = i + 1;
        if (num == 1) {
          comment.innerHTML = `
          <p>00${num}</p>
          <h3>Blue-eyes White Dragon</h3>`;
        } else if (num == 16) {
          comment.innerHTML = `
          <p>0${num}</p>
          <h3>Time Wizard</h3>`;
        } else if (num == 22) {
          comment.innerHTML = `
          <p>0${num}</p>
          <h3>Summoned Skull</h3>`;
        } else if (num == 35) {
          comment.innerHTML = `
          <p>0${num}</p>
          <h3>Dark Magician</h3>`;
        } else if (num == 58) {
          comment.innerHTML = `
          <p>0${num}</p>
          <h3>Kuriboh</h3>`;
        } else if (num == 62) {
          comment.innerHTML = `
          <p>0${num}</p>
          <h3>Harpie Lady</h3>`;
        } else if (num == 74) {
          comment.innerHTML = `
          <p>0${num}</p>
          <h3>Giant Soldier of Stone</h3>`;
        } else if (num == 82) {
          comment.innerHTML = `
          <p>0${num}</p>
          <h3>Red-eyes B. Dragon</h3>`;
        } else if (num == 99) {
          comment.innerHTML = `
          <p>0${num}</p>
          <h3>Pumpking the King of Ghosts</h3>`;
        } else {
          if (num <= 9) {
            comment.innerHTML = `
          <p>00${num}</p>
          <h3>Select Card</h3>`;
          } else {
            comment.innerHTML = `
          <p>0${num}</p>
          <h3>Select Card</h3>`;
          }
          if (num == 100) {
            comment.innerHTML = `
          <p>${num}</p>
          <h3>Select Card</h3>`;
          }
        }
      });
      comment.innerHTML = `
          <p>000</p>
          <h3>Select Card</h3>`;
    }
  });
  seletCommentOfCard();
  selectOfCard();
};