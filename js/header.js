// ----------------------- Cabeçalho ---------------------------
function dropHeader() {
    const header = document.querySelector('header');
    const confMenu = document.getElementById('nav');
    
    if(confMenu.classList.contains('active') == false)
        header.classList.toggle('sticky', window.scrollY > 0);
};

window.addEventListener('scroll', dropHeader);

// -----------------------------------------------------------------
// ---------------------------- Menu ------------------------------
const btn_mobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav_bar = document.getElementById('nav');
    const confHeader = document.querySelector('header');

    nav_bar.classList.toggle('active'); // Adiciona classe quando não tem, remove quando tem
    
    if(confHeader.classList.contains('sticky') == false)
    {
        const header = document.querySelector('header');
        header.classList.add('sticky');
    }

    dropHeader(); // Estabelece uma relação de intertravamento na visualização do fundo do cabeçalho e menu
 };

btn_mobile.addEventListener('click', toggleMenu);

var abt = document.getElementsByClassName('abt'); // Tomar cuidado pq aqui ele vai enxergar como se fosse um vetor (menu e rodapé), logo vamos escolher a posicao zero que corresponde as classes do menu
var prt = document.getElementsByClassName('prt');
var ctt = document.getElementsByClassName('ctt');

function clickMenu() {
    const menu = document.getElementById('nav');

    menu.classList.remove('active')    
};

abt[0].addEventListener('click', clickMenu);
prt[0].addEventListener('click', clickMenu);
ctt[0].addEventListener('click', clickMenu);

// -----------------------------------------------------------------