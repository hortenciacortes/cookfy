// RECEITAS
const recipe = [
    { name: 'Sanduíche de tomate com salada de ovos', url: 'prato_2.png', difficulty: 'Fácil', star: 1, days: 1 },
    { name: 'Iogurte de fruta crocante', url: 'prato_4.png', difficulty: 'Difícil', star: 4, days: 2 },
];
let currentRecipe = 1;
function handleArrow() {
    for (let i = 0; i < recipe.length; i++) {
        if (currentRecipe == recipe.length) {
            currentRecipe = 0;
        }
        if (i === currentRecipe) {
            document.getElementById('recipe-img').innerHTML = `
                <img id="recipe-img" src="./assets/images/${recipe[i].url}" alt=${recipe[0].name}>
            `
            document.getElementById('recipe-day').innerHTML = `Adicionado ${recipe[i].days === 1 ? 'ontem' : 'a ' + recipe[i].days + ' dias'}`
            document.getElementById('recipe-name').innerHTML = recipe[i].name;
            document.getElementById('recipe-difficulty').innerHTML = recipe[i].difficulty;
            if (recipe[i].star === 2) {
                document.getElementById('star').innerHTML = ` 
                <img src="./assets/images/star.svg" alt="Estrela preenchida">
                <img src="./assets/images/star.svg" alt="Estrela preenchida">
                <img src="./assets/images/star_empty.svg" alt="Estrela vazia">
                <img src="./assets/images/star_empty.svg" alt="Estrela vazia">
                <img src="./assets/images/star_empty.svg" alt="Estrela vazia">
                `;
            } else if (recipe[i].star === 4) {
                document.getElementById('star').innerHTML = ` 
                <img src="./assets/images/star.svg" alt="Estrela preenchida">
                <img src="./assets/images/star.svg" alt="Estrela preenchida">
                <img src="./assets/images/star.svg" alt="Estrela preenchida">
                <img src="./assets/images/star.svg" alt="Estrela preenchida">
                <img src="./assets/images/star_empty.svg" alt="Estrela vazia">
                `;
            }
        }
    }
    currentRecipe++;
}

// MODAL'S
const Modal = {
    openClose() {
        document.querySelector("#modal-sidebar-active").classList.toggle("modal-active");
    },
    openCloseBox() {
        document.querySelector("#modal-box-active").classList.toggle("modal-active");
    }
};

document.getElementById("user").addEventListener("click", Modal.openClose);
document.querySelector(".closeSidebar").addEventListener("click", Modal.openClose);

document.querySelector('.areaDescription').addEventListener("click", Modal.openCloseBox)
document.querySelector(".closeBox").addEventListener("click", Modal.openCloseBox);

// API

const getRandomUser = async () => {
    const user = await fetch("https://randomuser.me/api/");
    const userJson = await user.json();
    console.log(userJson.results);
};

getRandomUser();