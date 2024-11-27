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



  fetch('../../assets/players.json')
  .then((res)=>res.json())
  .then((data)=>{
    localStorage.setItem('players', JSON.stringify(data))
  })
  .catch((error) => console.error('problem fetch operation:', error));

const savePlayer = document.querySelector("#savePlayer");
let playersLocal = JSON.parse(localStorage.getItem('players'));
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
    alert('Please fill in all the fields!');
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

  playersLocal.push(playerData);
  // console.log(playersLocal)
  localStorage.setItem('players', JSON.stringify(playersLocal));

  document.getElementById('videform').reset();
});
