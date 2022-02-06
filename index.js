const Modal = {
    openClose() {
        document
            .querySelector(".modal-overlay")
            .classList.toggle("modal-active");
    },
};

document.getElementById("user").addEventListener("click", Modal.openClose);
document.querySelector(".closeModal").addEventListener("click", Modal.openClose);

