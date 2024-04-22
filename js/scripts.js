// inject current year in footer
const currentYear = new Date()
document.querySelector('#year').textContent = currentYear.getFullYear()

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open')
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu