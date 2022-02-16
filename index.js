// RECEITAS
const recipe = [
    {
        name: "Sanduíche de tomate com salada de ovos",
        url: "prato_2.png",
        difficulty: "Fácil",
        star: 1,
        days: 1
    },
    {
        name: "Iogurte de fruta crocante",
        url: "prato_4.png",
        difficulty: "Difícil",
        star: 4,
        days: 2
    },
    {
        name: "Iogurte",
        url: "prato_4.png",
        difficulty: "Médio",
        star: 3,
        days: 4
    },
    {
        name: "Fruta",
        url: "prato_4.png",
        difficulty: "Difícil",
        star: 5,
        days: 8
    }
];
let currentRecipe = 0;

function handleRightArrow() {
    currentRecipe++;
    for (let i = 0; i < recipe.length; i++) {
        if (currentRecipe == recipe.length) {
            currentRecipe = 0;
        }
        if (i === currentRecipe) {
            changeItem(i);
        }
    }
}
function handleLeftArrow() {
    console.log(currentRecipe, recipe.length);
    currentRecipe--;
    for (let i = 0; i < recipe.length; i++) {
        if (currentRecipe === -1) {
            currentRecipe = recipe.length - 1;
        }
        if (i === currentRecipe) {
            changeItem(i);
        }
    }
}

const changeItem = (i) => {
        const img = `<img id="recipe-img" src="./assets/images/${recipe[i].url}" alt=${recipe[0].name}>`;
        const days = `Adicionado ${recipe[i].days === 1 ? "ontem" : "a " + recipe[i].days + " dias"}`;
        const name = recipe[i].name;
        const difficulty = recipe[i].difficulty;

        document.getElementById("recipe-img").innerHTML = img;
        document.getElementById("recipe-day").innerHTML = days;
        document.getElementById("recipe-name").innerHTML = name;
        document.getElementById("recipe-difficulty").innerHTML = difficulty;

        document.getElementById("photo-img").innerHTML = img;
        document.getElementById("photo-day").innerHTML = days;
        document.getElementById("photo-name").innerHTML = name;
        document.getElementById("photo-difficulty").innerHTML = difficulty;

        const starFull =
            '<img src="./assets/images/star.svg" alt="Estrela preenchida">';
        const starEmpty =
            '<img src="./assets/images/star_empty.svg" alt="Estrela vazia">';
        let numberStars = '';
            for(let y = 1; y <= 5; y++){
                numberStars += (y <= recipe[i].star) ? starFull : starEmpty;
            }

            document.getElementById("star").innerHTML = numberStars;
            document.getElementById("photo-star").innerHTML = numberStars;
};

changeItem(0);

// GATRONOMIC

const handleGastronomic = {
    cozinha() {
        document.querySelector("#kitchen").classList.add("detach");
        document.querySelector("#kitchen-img").classList.add("active");
        document.querySelector("#patisserie").classList.remove("detach");
        document.querySelector("#patisserie-img").classList.remove("active");
        document.querySelector("#drinks").classList.remove("detach");
        document.querySelector("#drinks-img").classList.remove("active");
        document.querySelector(".gastro-img").innerHTML = `
            <img class="gastro" src="./assets/images/kitchen.jpg" alt="Mini bolinho de morango" />
          `;
    },
    patisserie() {
        document.querySelector("#patisserie").classList.add("detach");
        document.querySelector("#patisserie-img").classList.add("active");
        document.querySelector("#kitchen").classList.remove("detach");
        document.querySelector("#kitchen-img").classList.remove("active");
        document.querySelector("#drinks").classList.remove("detach");
        document.querySelector("#drinks-img").classList.remove("active");
        document.querySelector(".gastro-img").innerHTML = `
            <img class="gastro" src="./assets/images/prato_3.png" alt="Mini bolinho de morango" />
          `;
    },
    drinks() {
        document.querySelector("#drinks").classList.add("detach");
        document.querySelector("#drinks-img").classList.add("active");
        document.querySelector("#kitchen").classList.remove("detach");
        document.querySelector("#kitchen-img").classList.remove("active");
        document.querySelector("#patisserie").classList.remove("detach");
        document.querySelector("#patisserie-img").classList.remove("active");
        document.querySelector(".gastro-img").innerHTML = `
            <img class="gastro" src="./assets/images/drinks_img.jpg" alt="Três drinks" />
          `;
    }
};

// MODAL'S
const Modal = {
    openClose() {
        document
            .querySelector("#modal-sidebar-active")
            .classList.toggle("modal-active");
    },
    openCloseBox() {
        document
            .querySelector("#modal-box-active")
            .classList.toggle("modal-active");
    },
    openClosePhoto() {
        document
            .querySelector("#modal-photo-active")
            .classList.toggle("modal-active");
    }
};

document.getElementById("user").addEventListener("click", Modal.openClose);
document.querySelector(".closeSidebar").addEventListener("click", Modal.openClose);

document.querySelector(".openInfos").addEventListener("click", Modal.openCloseBox);
document.querySelector(".closeBox").addEventListener("click", Modal.openCloseBox);

document.querySelector(".openPhoto").addEventListener("click", Modal.openClosePhoto);
document.querySelector(".closePhoto").addEventListener("click", Modal.openClosePhoto);

// LIKES
const likes = () => {
    const like = document.querySelector(".likes").innerHTML === "curtir" ? "curtido" : "curtir";
    document.querySelector(".likes").innerHTML = like;
};

// API

const getRandomUser = async () => {
    const api = await fetch("https://randomuser.me/api/");
    const userJson = await api.json();
    const user = userJson.results;

    document.querySelector(".name").innerHTML = `
          ${user[0].name.first} ${user[0].name.last}
      `;

    const gender = user[0].gender === "female"
        ? '<img src="./assets/images/avatar_feminino.svg">'
        : '<img src="./assets/images/avatar_masculino.svg"></img>';

    document.querySelector(".user").innerHTML = `
          ${gender}
          <p class="detach">${user[0].name.first}</p>
      `;
    document.querySelector("#user-sidebar").innerHTML = `
          <p class="detach">${user[0].name.first}</p>
          ${gender}
      `;
    document.querySelector("#email").innerHTML = user[0].email;
    document.querySelector("#telephone").innerHTML = user[0].cell;
};

getRandomUser();
