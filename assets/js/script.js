const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


function toggleAttributes() {
const position = document.getElementById('position').value;
const generalStats = document.getElementById('generalStats');
const goalkeeperStats = document.getElementById('goalkeeperStats');

if (position === 'GK') {
generalStats.classList.add('hidden');
goalkeeperStats.classList.remove('hidden');
} else {
generalStats.classList.remove('hidden');
goalkeeperStats.classList.add('hidden');
}
}


const formChengeFormation = document.querySelector("#form-chenge-formation");
const formAddPlayer = document.querySelector("#form-add-player");
const addPlayer = document.querySelector(".addPlayer");
const changeFormation = document.querySelector(".changeFormation");

addPlayer.addEventListener("click",()=>{
  formChengeFormation.classList.add("hidden");
  formAddPlayer.classList.remove("hidden");
})

changeFormation.addEventListener("click",()=>{
  formChengeFormation.classList.remove("hidden");
  formAddPlayer.classList.add("hidden");
})


