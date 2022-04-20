const laborBtns = document.querySelectorAll('.labor-item')
const laborModal = document.querySelector('.labor-modal')
const laborModalCtn = document.querySelector('.labor-content')
const closeModal = document.querySelector('.modal-close')

function showModal() {
    laborModal.classList.add('open')
}

function hideModal() {
    laborModal.classList.remove('open')
}

for (laborBtn of laborBtns) {
    laborBtn.onclick = showModal
}

closeModal.onclick = hideModal
laborModal.onclick = hideModal
laborModalCtn.onclick = function (event) {
    event.stopPropagation()
}

const menuBtn = document.querySelector('.menu-btn')
const header = document.querySelector('#header')
const navs = document.querySelectorAll('.nav-list')
const contactBtn = document.querySelector('.contact-btn')
const homeBtn = document.querySelector('#header-logo')

menuBtn.onclick = function () {
    const headerHeight = header.clientHeight === 0
    if (headerHeight) {
        header.classList.add('open')
    } else {
        header.classList.remove('open')
    }
}

function hideMenu() {
    header.classList.remove('open')
}

for (nav of navs) {
    nav.onclick = hideMenu
}

contactBtn.onclick = hideMenu
homeBtn.onclick = hideMenu
