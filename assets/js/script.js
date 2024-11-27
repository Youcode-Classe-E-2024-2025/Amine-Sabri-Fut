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





// let players = JSON.parse(localStorage.getItem('players')) || [];

// // Function to add player to localStorage
// function addPlayerToLocalStorage(event) {
//   event.preventDefault(); // Prevent form submission and page reload
  
//   // Get values from the form
//   const name = document.getElementById('name').value;
//   const position = document.getElementById('position').value;
//   const clubImage = document.getElementById('clubImage').value;
//   const nationality = document.getElementById('nationality').value;
//   const playerImage = document.getElementById('playerImage').value;
//   const pace = document.getElementById('pace').value;
//   const shooting = document.getElementById('shooting').value;
//   const passing = document.getElementById('passing').value;
//   const dribbling = document.getElementById('dribbling').value;
//   const defending = document.getElementById('defending').value;
//   const physical = document.getElementById('physical').value;

//   // Validation
//   if (!name || !position || !clubImage|| !nationality || !playerImage || !pace || !shooting || !passing || !dribbling || !defending || !physical) {
//     alert('Please fill in all the fields!');
//     return;
//   }

//   // Goalkeeper stats check
//   if (position === 'GK') {
//     const diving = document.getElementById('diving').value;
//     const handling = document.getElementById('handling').value;
//     const kicking = document.getElementById('kicking').value;
//     const reflexes = document.getElementById('reflexes').value;
//     const speed = document.getElementById('speed').value;
//     const positioning = document.getElementById('positioning').value;

//     if (!diving || !handling || !kicking || !reflexes || !speed || !positioning) {
//       alert('Please fill in all the goalkeeper stats!');
//       return;
//     }
//   }
//     const playerData = {
//       name: name,
//       position: position,
//       clubImage:clubImage,
//       nationality:nationality,
//       playerImage:playerImage,
//       stats: {
//         pace: pace,
//         shooting: shooting,
//         passing: passing,
//         dribbling: dribbling,
//         defending: defending,
//         physical: physical,
//       }
//     };

//     // If the player is a goalkeeper, add specific goalkeeper stats
//     if (position === 'GK') {
//       playerData.stats.diving = document.getElementById('diving').value;
//       playerData.stats.handling = document.getElementById('handling').value;
//       playerData.stats.kicking = document.getElementById('kicking').value;
//       playerData.stats.reflexes = document.getElementById('reflexes').value;
//       playerData.stats.speed = document.getElementById('speed').value;
//       playerData.stats.positioning = document.getElementById('positioning').value;
//     }

//     // Add the new player to the players array
//     players.push(playerData);

//     // console.log(players);
//     // Uncomment the following line to save players to localStorage
//     localStorage.setItem('players', JSON.stringify(players));

//     console.log('Player added:', playerData);

//     // Reset the form
//     document.getElementById('videform').reset();
//   }
// // }

// // Attach the submit event to the form
// document.getElementById('playerForm').addEventListener('click', addPlayerToLocalStorage);

