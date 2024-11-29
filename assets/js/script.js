const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


  // Get the select element and the forms
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
let index = playersLocal.length;

// console.log(index)


savePlayer.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const playerImage = document.getElementById('playerImage').value;
  const position = document.getElementById('position').value;
  const nationalityString = document.getElementById('nationalityString').value;
  const nationality = document.getElementById('nationality').value;
  const clubString = document.getElementById('clubString').value;
  const clubImage = document.getElementById('clubImage').value;
  const rating = document.getElementById('rating').value;
  const pace = document.getElementById('pace').value;
  const shooting = document.getElementById('shooting').value;
  const passing = document.getElementById('passing').value;
  const dribbling = document.getElementById('dribbling').value;
  const defending = document.getElementById('defending').value;
  const physical = document.getElementById('physical').value;
  
  if (!name || !position || !clubImage || !nationalityString || !clubString || !nationality || !playerImage  || !rating|| !pace || !shooting || !passing || !dribbling || !defending || !physical) {
      alert('Please fill in all the fields!aaaaa');
      return;
    }
    
    const playerData = {
        id: ++index,
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













const saveGoalkeeper = document.querySelector("#saveGoalkeeper");
let indexGK = playersLocal.length;

// console.log(index)


saveGoalkeeper.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    
    const playerImage = document.getElementById('playerImage').value;
    console.log(playerImage);
    const position = document.getElementById('position').value;
    const nationalityString = document.getElementById('nationalityString').value;
    const nationalityFlage = document.getElementById('nationalityFlage').value;
    const clubString = document.getElementById('clubString').value;
    const clubImage = document.getElementById('clubImage').value;
    const rating = document.getElementById('rating').value;
    console.log(rating)
    const diving = document.getElementById('diving').value;
    const handling = document.getElementById('handling').value;
    const kicking = document.getElementById('passing').value;
  const reflexes = document.getElementById('dribbling').value;
  const speed = document.getElementById('defending').value;
  const positioning = document.getElementById('physical').value;

  if (!name || !position || !clubImage || !nationalityString || !clubString || !nationalityFlage || !playerImage  || !rating|| !diving || !handling || !kicking || !reflexes || !speed  || !positioning) {
    alert('Please fill in all the fields!');
    return;
  }

  const GkData = {
    id: ++indexGK,
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
            <div class="absolute text-gray-300 text-sm left-[50px] bottom-[20px] w-fit">
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
      let value = element.getAttribute('data-name'); // Use 'item' here
      let item=playersLocal.find(player=> player.name==value);
      
   
      selectdCard.classList = "newCard relative w-fit";

  // Set the data-name attribute to selectedCard
  selectdCard.setAttribute('data-name', element.name);
    
  selectdCard.innerHTML = `
      <img src='./assets/images/123.png' alt="Nation" class="w-[280px] h-[140px]">
            <div class=" flex w-fit absolute bottom-[62px] left-[20px] ">
                <div class=" text-gray-300 box-borde h-fit w-fit mt-2  mr-2">
                    <div class="w-fit  text-[8px] ">${item.position}</div>
                    <div>
                        <img src="${item.flag}" alt="Nation" class="w-[15px] h-[15px] object-contain">
                    </div>
                    <div>
                        <img src="${item.logo}" alt="Club" class="w-[15px] h-[15px] object-contain">
                    </div>
                </div>
                <img src="${item.photo}" alt="Player" class="  w-[50px] h-[50px] ">
            </div>
            <div class=" absolute  text-gray-300 text-center font-bold text-[8px] w-[80px]  left-[14px] bottom-[50px] ">${item.name}</div>
            <div class="absolute text-gray-300 text-sm left-[27px] h-[30px] w-[120px] bottom-[25px]   ">
                    <div class=" w-[70px] mr-[2px] flex-wrap flex text-center">
                        <div class="mr-2">
                            <div class="font-bold text-[8px]">${item.pace || item.diving} <span class="font-light">${item.position == "GK" ? 'DIV':'PAC'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${item.shooting || item.handling}  <span class="font-light">${item.position == "GK" ? 'HAN':'SHO'}</span></div>
                        </div>
                        <div class="mr-2">
                            <div class="font-bold text-[8px]">${item.passing || item.kicking} <span class="font-light">${item.position == "GK" ? 'KIC':'PAS'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[8px]">${item.dribbling || item.reflexes}  <span class="font-light">${item.position == "GK" ? 'REF':'DRB'}</span></div>
                        </div>
                    </div>
                </div>
    `;          
    element.remove()
    myModal.classList.add("hidden");
    });
  });

}



const cards = document.querySelectorAll(".card");


let clickCount = 0; 

cards.forEach((card) => {
    card.addEventListener('click', () => {
        clickCount++;
        selectdCard = card; 
        
        if (clickCount === 2) {
            card.innerHTML = `<img src="./assets/images/card.png" class="h-[130px] w-[180px]">`;

            if(selectdCard){
                myModal.classList.add("hidden");
            }else{
                myModal.classList.remove("hidden");
            }
            clickCount = 0;
        }
    });
});

