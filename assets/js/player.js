let playersLocal = JSON.parse(localStorage.getItem('players')) || [];
let players = playersLocal;

const affichePlayer = document.getElementById("affichePlayer");

// Fonction d'affichage
function afficherJoueurs() {
    affichePlayer.innerHTML = ""; 
    players.forEach(player => {
        const divElement = document.createElement("div");
        divElement.style.backgroundSize = "cover";
        divElement.style.backgroundRepeat = "no-repeat";

        // Attribuer un ID pour faciliter la suppression
        divElement.setAttribute("id", `player-${player.id}`);

        divElement.classList = "w-[300px] h-[380px] bg-[url('./assets/images/123.png')]  ";
        divElement.innerHTML = `
            <div class="text-white ml-[220px] mt-[40px] w-fit">
                <i class="bi bi-trash-fill" style="cursor: pointer;" onClick="supprimer(${player.id})"></i>
                <i class="bi bi-pencil-square" style="cursor: pointer;"></i>
            </div>
            <div class="flex  w-fit mt-[25px] ml-[55px] ">
                <div class=" text-gray-300 box-borde  w-fit mt-6 mr-4">
                    <div class="text-3xl font-bold w-fit ">${player.position}</div>
                    <div>
                        <img src="${player.flag}" alt="Nation" class="w-[30px] h-[30px] object-contain">
                    </div>
                    <div>
                        <img src="${player.logo}" alt="Club" class="w-[30px] h-[30px] object-contain">
                    </div>
                </div>
                <img src="${player.photo}" alt="Player" class="w-[130px] h-[130px] ">
            </div>
            <div class=" text-center text-gray-300 text-1xl font-bold  mt-1">${player.name}</div>
            <div class=" px-[55px] text-gray-300 text-sm mt-4">
                    <div class="grid grid-cols-2  text-center">
                        <div>
                            <div class="font-bold text-[16px]">${player.pace || player.diving} <span class="font-light">${player.position == "GK" ? 'DIV':'PAC'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[16px]">${player.shooting || player.handling}  <span class="font-light">${player.position == "GK" ? 'HAN':'SHO'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[16px]">${player.passing || player.kicking} <span class="font-light">${player.position == "GK" ? 'KIC':'PAS'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[16px]">${player.dribbling || player.reflexes}  <span class="font-light">${player.position == "GK" ? 'REF':'DRB'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[16px]">${player.defending || player.speed}  <span class="font-light">${player.position == "GK" ? 'SPE':'DEF'}</span></div>
                        </div>
                        <div>
                            <div class="font-bold text-[16px]">${player.physical || player.positioning} <span class="font-light">${player.position == "GK" ? 'POS':'PHY'}</span></div>
                        </div>
                    </div>
                </div>
        `;
        affichePlayer.appendChild(divElement);
    });
}

function supprimer(id) {
    let index = players.findIndex((player) => player.id == id);

    if (index !== -1) { 
        players.splice(index, 1);
        localStorage.setItem("players", JSON.stringify(players));
        const playerElement = document.getElementById(`player-${id}`);
        if (playerElement) {
            playerElement.remove();
        }
    }
}
afficherJoueurs();
