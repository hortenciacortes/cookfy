const Modal = {
    openClose() {
        document.querySelector("#modal-sidebar-active").classList.toggle("modal-active");
    },
    openCloseBox(){
        document.querySelector("#modal-box-active").classList.toggle("modal-active");
    }
};

document.getElementById("user").addEventListener("click", Modal.openClose);
document.querySelector(".closeSidebar").addEventListener("click", Modal.openClose);

document.querySelector('.areaDescription').addEventListener("click", Modal. openCloseBox)
document.querySelector(".closeBox").addEventListener("click", Modal.openCloseBox);
