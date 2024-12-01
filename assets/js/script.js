const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


  const playerActionSelect = document.getElementById('playerAction');
  const formAddPlayer = document.getElementById('form-add-player');
  const formAddGoalkeeper = document.getElementById('form-add-goalkeeper');

  playerActionSelect.addEventListener('change', function() {
      const selectedAction = playerActionSelect.value;

      if (selectedAction === 'addPlayer') {
          formAddPlayer.classList.remove('hidden');
          formAddGoalkeeper.classList.add('hidden');
          formChengeFormation.classList.add("hidden");
      } else if (selectedAction === 'GK') {
          formAddGoalkeeper.classList.remove('hidden');
          formAddPlayer.classList.add('hidden');
          formChengeFormation.classList.add("hidden");
      }
  });

  const changeFormation = document.querySelector(".changeFormation");
  const formChengeFormation = document.querySelector("#form-chenge-formation");

  changeFormation.addEventListener("click",()=>{
    formChengeFormation.classList.remove("hidden");
    formAddGoalkeeper.classList.add('hidden');
    formAddPlayer.classList.add('hidden');
  })



const savePlayer = document.querySelector("#savePlayer");
let playersLocal = JSON.parse(localStorage.getItem('players')) || [];
console.log(playersLocal)


// console.log(index)


savePlayer.addEventListener("click", (e) => {
  e.preventDefault();
  const index = playersLocal.length + 1;

  const name = document.getElementById('name').value.trim();
  const playerImage = document.getElementById('playerImage').value.trim();
  const position = document.getElementById('position').value.trim();
  const nationalityString = document.getElementById('nationalityString').value.trim();
  const nationality = document.getElementById('nationality').value.trim();
  const clubString = document.getElementById('clubString').value.trim();
  const clubImage = document.getElementById('clubImage').value.trim();
  const rating = document.getElementById('rating').value.trim();
  const pace = document.getElementById('pace').value.trim();
  const shooting = document.getElementById('shooting').value.trim();
  const passing = document.getElementById('passing').value.trim();
  const dribbling = document.getElementById('dribbling').value.trim();
  const defending = document.getElementById('defending').value.trim();
  const physical = document.getElementById('physical').value.trim();
  
  if (!name) {
    alert('Please enter the player name.');
    return false;
  }
  if (!position) {
    alert('Please select a position.');
    return false;
  }
  if (!clubImage || !isValidImageURL(clubImage)) {
    alert('Please provide a club image URL.');
    return false;
  }
  if (!nationalityString) {
    alert('Please enter nationality details.');
    return false;
  }
  if (!clubString) {
    alert('Please enter the club name.');
    return false;
  }
  if (!nationality || !isValidImageURL(nationality)) {
    alert('Please select the nationality.');
    return false;
  }
  if (!playerImage || !isValidImageURL(playerImage) ){
    alert('Please provide a player image URL.');
    return false;
  }
  if (!rating || isNaN(rating) || rating < 0 || rating > 100) {
    alert('Please enter a valid rating (0-100).');
    return false;
  }
  if (!pace || isNaN(pace) || pace < 0 || pace > 99) {
    alert('Please enter a valid pace value (0-99).');
    return false;
  }
  if (!shooting || isNaN(shooting) || shooting < 0 || shooting > 99) {
    alert('Please enter a valid shooting value (0-99).');
    return false;
  }
  if (!passing || isNaN(passing) || passing < 0 || passing > 99) {
    alert('Please enter a valid passing value (0-99).');
    return false;
  }
  if (!dribbling || isNaN(dribbling) || dribbling < 0 || dribbling > 99) {
    alert('Please enter a valid dribbling value (0-99).');
    return false;
  }
  if (!defending || isNaN(defending) || defending < 0 || defending > 99) {
    alert('Please enter a valid defending value (0-99).');
    return false;
  }
  if (!physical || isNaN(physical) || physical < 0 || physical > 99) {
    alert('Please enter a valid physical value (0-99).');
    return false;
  }
    
    const playerData = {
        id: index,
        name: name,
        photo: playerImage,
        position: position,
        nationality:nationalityString,
        flag: nationality,
        club:clubString,
        logo: clubImage,
        rating:rating,
        pace: pace,
        shooting: shooting,
        passing: passing,
        dribbling: dribbling,
        defending: defending,
        physical: physical,
        
    };
    
    // console.log(playersLocal)
    playersLocal.push(playerData);
    
    localStorage.setItem('players', JSON.stringify(playersLocal));
    
    
    document.getElementById('videform').reset();
});


function isValidImageURL(url) {
    const regex = /^(https?:\/\/|\/\/).*?\.(jpg|jpeg|png|gif|bmp)$/i;
    return regex.test(url);
  }










const saveGoalkeeper = document.querySelector("#saveGoalkeeper");
const videformGk = document.querySelector("#videformGk");


saveGoalkeeper.addEventListener("click", (e) => {
    e.preventDefault();
    const index = playersLocal.length + 1;

    const name = videformGk.querySelector('#name').value.trim();
    const playerImage = videformGk.querySelector('#playerImage').value.trim();
    const position = videformGk.querySelector('#position').value.trim();
    const nationalityString = videformGk.querySelector('#nationalityString').value.trim();
    const nationalityFlage = videformGk.querySelector('#nationalityFlage').value.trim();
    const clubString = videformGk.querySelector('#clubString').value.trim();
    const clubImage = videformGk.querySelector('#clubImage').value.trim();
    const rating = videformGk.querySelector('#rating').value.trim();
    const diving = videformGk.querySelector('#diving').value.trim();
    const handling = videformGk.querySelector('#handling').value.trim();
    const kicking = videformGk.querySelector('#kicking').value.trim();
    const reflexes = videformGk.querySelector('#reflexes').value.trim();
    const speed = videformGk.querySelector('#speed').value.trim();
    const positioning = videformGk.querySelector('#positioning').value.trim();

    if (!name) {
        alert('Please enter the player name.');
        return false;
      }
      if (!position) {
        alert('Please select a position.');
        return false;
      }
      if (!clubImage || !isValidImageURL(clubImage)) {
        alert('Please provide a valid club image URL.');
        return false;
      }
      if (!nationalityString) {
        alert('Please enter nationality details.');
        return false;
      }
      if (!clubString) {
        alert('Please enter the club name.');
        return false;
      }
      if (!nationalityFlage || !isValidImageURL(nationalityFlage)) {
        alert('Please provide a valid nationality flag image URL.');
        return false;
      }
      if (!playerImage || !isValidImageURL(playerImage)) {
        alert('Please provide a valid player image URL.');
        return false;
      }
      if (!rating || isNaN(rating) || rating < 0 || rating > 100) {
        alert('Please enter a valid rating (0-100).');
        return false;
      }
      if (!diving || isNaN(diving) || diving < 0 || diving > 99) {
        alert('Please enter a valid diving value (0-99).');
        return false;
      }
      if (!handling || isNaN(handling) || handling < 0 || handling > 99) {
        alert('Please enter a valid handling value (0-99).');
        return false;
      }
      if (!kicking || isNaN(kicking) || kicking < 0 || kicking > 99) {
        alert('Please enter a valid kicking value (0-99).');
        return false;
      }
      if (!reflexes || isNaN(reflexes) || reflexes < 0 || reflexes > 99) {
        alert('Please enter a valid reflexes value (0-99).');
        return false;
      }
      if (!speed || isNaN(speed) || speed < 0 || speed > 99) {
        alert('Please enter a valid speed value (0-99).');
        return false;
      }
      if (!positioning || isNaN(positioning) || positioning < 0 || positioning > 99) {
        alert('Please enter a valid positioning value (0-99).');
        return false;
      }

  const GkData = {
    id: index,
    name: name,
    photo: playerImage,
    position: position,
    nationality:nationalityString,
    flag: nationalityFlage,
    club:clubString,
    logo: clubImage,
    rating:rating,
    diving: diving,
    handling : handling ,
    kicking: kicking,
    reflexes: reflexes,
    speed: speed,
    positioning: positioning,
  };

  // console.log(playersLocal)
  playersLocal.push(GkData);

  localStorage.setItem('players', JSON.stringify(playersLocal));
  

  document.getElementById('videformGk').reset();
});







const affichePlayerFilter = document.querySelector("#affichePlayerFilter");
const myModal = document.querySelector(".myModal");
const iconModel = document.querySelector("#iconModel");

iconModel.addEventListener('click',()=>{
  myModal.classList.add("hidden");
})

let selectdCard = null;

function PlayerPosition(position){
  myModal.classList.remove("hidden");
  let playersFiltier = playersLocal.filter((player)=>player.position == position)
  // console.log(playersFiltier)
  affichePlayerFilter.innerHTML = "";
  
  playersFiltier.forEach(player => {
      const divElement = document.createElement("div");
      divElement.style.backgroundSize = "55%";
      divElement.style.backgroundRepeat = "no-repeat";
      divElement.classList = "newCard relative w-fit  ";
      divElement.setAttribute('data-name', player.name);
      
      // console.log(divElement)
      divElement.innerHTML = `
      <img src='./assets/images/123.png' alt="Nation" class="w-[160px] h-[180px]">
            <div class=" flex w-fit absolute bottom-[80px] left-[30px]">
                <div class=" text-gray-300 box-borde h-fit w-fit mr-4 ml-1">
                    <div class="text-1xl font-bold w-fit ">${player.position}</div>
                    <div>
                        <img src="${player.flag}" alt="Nation" class="w-[15px] h-[15px] object-contain">
                    </div>
                    <div>
                        <img src="${player.logo}" alt="Club" class="w-[15px] h-[15px] object-contain">
                    </div>
                </div>
                <img src="${player.photo}" alt="Player" class=" w-[60px] h-[60px] ">
            </div>
            <div class=" absolute  text-gray-300 text-center font-bold text-[8px] w-fit  left-[60px] bottom-[65px]">${player.name}</div>
            <div class="absolute text-gray-300 left-[51px] bottom-[23px] w-fit">
                    <div class="grid grid-cols-2 gap-x-2 w-fit text-center">
                        <div>
                            <div class="font-bold text-[8px]">${player.pace || player.diving} <span class="font-light">${player.position == "GK" ? 'DIV':'PAC'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${player.shooting || player.handling}  <span class="font-light">${player.position == "GK" ? 'HAN':'SHO'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${player.passing || player.kicking} <span class="font-light">${player.position == "GK" ? 'KIC':'PAS'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${player.dribbling || player.reflexes}  <span class="font-light">${player.position == "GK" ? 'REF':'DRB'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${player.defending || player.speed}  <span class="font-light">${player.position == "GK" ? 'SPE':'DEF'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${player.physical || player.positioning} <span class="font-light">${player.position == "GK" ? 'POS':'PHY'}</span></div>
                        </div>
                    </div>
                </div>
    `;          
    
    affichePlayerFilter.appendChild(divElement);
});
addEvent();
}
function addEvent() {
    const newCards = document.querySelectorAll(".newCard");
    
  newCards.forEach(element => {
    element.addEventListener('click', function() {
      let value = element.getAttribute('data-name');
      let item=playersLocal.find(player=> player.name==value);
      
   
      selectdCard.classList = "newCard relative w-fit ";

  selectdCard.setAttribute('data-name', element.name);
    
  selectdCard.innerHTML = `
      <span class="icon_card_terrain absolute left-[79px] top-5" style="cursor: pointer;" ><i class="bi bi-x text-white"></i></span>
      <img src='./assets/images/123.png' alt="Nation" class="w-[170px] h-[180px]">
            <div class=" flex w-fit absolute bottom-[80px] left-[34px] ">
                <div class=" text-gray-300 box-borde h-fit w-fit mt-2 mr-7  ">
                    <div class="w-fit font-bold text-[13px] ">${item.position}</div>
                    <div>
                        <img src="${item.flag}" alt="Nation" class="w-[15px] h-[15px] object-contain">
                    </div>
                    <div>
                        <img src="${item.logo}" alt="Club" class="w-[15px] h-[15px] object-contain">
                    </div>
                </div>
                <img src="${item.photo}" alt="Player" class="  w-[60px] h-[60px] ">
            </div>
            <div class=" absolute  text-gray-300 text-center font-semibold text-[12px] w-[80px]  left-[46px] bottom-[63px] ">${item.name}</div>
            <div class="absolute text-gray-300 left-[57px] bottom-[23px] w-fit">
                    <div class="grid grid-cols-2 gap-x-2 w-fit text-center">
                        <div>
                            <div class="font-bold text-[8px]">${item.pace || item.diving} <span class="font-light">${item.position == "GK" ? 'DIV':'PAC'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${item.shooting || item.handling}  <span class="font-light">${item.position == "GK" ? 'HAN':'SHO'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${item.passing || item.kicking} <span class="font-light">${item.position == "GK" ? 'KIC':'PAS'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${item.dribbling || item.reflexes}  <span class="font-light">${item.position == "GK" ? 'REF':'DRB'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${item.defending || item.speed}  <span class="font-light">${item.position == "GK" ? 'SPE':'DEF'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${item.physical || item.positioning} <span class="font-light">${item.position == "GK" ? 'POS':'PHY'}</span></div>
                        </div>
                    </div>
                </div>
    `;          
    let index = playersLocal.findIndex((player) => player.name === item.name);

        if (index !== -1) {
            removedPlayer = playersLocal.splice(index, 1)[0]; // Récupérer l'élément supprimé et le stocker dans la variable globale
            console.log(removedPlayer); // Afficher l'élément dans la console
            element.remove();
        }   

            myModal.classList.add("hidden");
            attachCloseIconEvent(selectdCard);
    });
  });

}

function attachCloseIconEvent(cardElement) {
    const closeIcon = cardElement.querySelector(".icon_card_terrain");
    
    closeIcon.addEventListener('click', (event) => {
        event.stopPropagation();
        myModal.classList.add("hidden");    
        cardElement.innerHTML = `<img src="./assets/images/card.png" class="w-[170px] h-[180px]">`;
    });
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener('click', () => {
        
        selectdCard = card;
        myModal.classList.remove("hidden");

        attachCloseIconEvent(card)
    });
});






const Formation = document.querySelector("#formation");
const submitFormation = document.getElementById("submitFormation");
const attaques = document.querySelector(".attaques");
const milieu = document.querySelector(".milieu");
const defence = document.querySelector(".defence");
// console.log(defence)


submitFormation.addEventListener("click",function(e){
    e.preventDefault();
    if(Formation.value === "4-3-3"){
        attaques.innerHTML=`
            <div class="card"  onclick="PlayerPosition('ST')"><img src="./assets/images/card.png"class="w-[170px] h-[180px]" alt="ST"></div>
            <div class="card " onclick="PlayerPosition('LW')"><img src="./assets/images/card.png" class="w-[170px] h-[180px]" alt="LW"></div>
            <div class="card" onclick="PlayerPosition('RW')"><img src="./assets/images/card.png" class="w-[170px] h-[180px]" alt="RW"></div>
        `
        milieu.innerHTML = `
            <div class="card" onclick="PlayerPosition('CL')"><img src="./assets/images/card.png" class="w-[170px] h-[180px]" alt="CM"></div>
            <div class="card" onclick="PlayerPosition('CDM')"><img src="./assets/images/card.png" class="w-[170px] h-[180px]" alt="CM"></div>
            <div class="card" onclick="PlayerPosition('CM')"><img src="./assets/images/card.png" class="w-[170px] h-[180px]" alt="CM"></div>
        
        `
    }else if(Formation.value === "4-4-2"){
        attaques.innerHTML=`
            <div class="card"  onclick="PlayerPosition('ST')"><img src="./assets/images/card.png"class="w-[170px] h-[180px]" alt="ST"></div>
            <div class="card " onclick="PlayerPosition('LW')"><img src="./assets/images/card.png" class="w-[170px] h-[180px]" alt="LW"></div>
            `
        milieu.innerHTML = `
            <div class="card" onclick="PlayerPosition('RW')"><img src="./assets/images/card.png" class="w-[170px] h-[180px]" alt="RW"></div>
            <div class="card" onclick="PlayerPosition('CL')"><img src="./assets/images/card.png" class="w-[170px] h-[180px]" alt="CM"></div>
            <div class="card" onclick="PlayerPosition('CDM')"><img src="./assets/images/card.png" class="w-[170px] h-[180px]" alt="CM"></div>
            <div class="card" onclick="PlayerPosition('CM')"><img src="./assets/images/card.png" class="w-[170px] h-[180px]" alt="CM"></div>
        
        `
    }
})

// console.log(chngeFormtion);