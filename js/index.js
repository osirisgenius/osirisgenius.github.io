
// MEDIA QUERY HOME NAVIGATION SHOW or HIDE //
const iconSelect = document.querySelector('#iconTrigger')
const icon = document.querySelector('#iconBar')
const menuBar = document.querySelector('.navigation')
const caret = document.querySelector('#caretIcon')

iconSelect.addEventListener('click',showNav)

function showNav() {
    if (icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')

        menuBar.classList.remove('hide')
        menuBar.classList.add('show')

        caret.style.display ='none'
    }

    else{
        icon.classList.remove('fa-close')
        icon.classList.add('fa-bars')

        menuBar.classList.remove('show')
        menuBar.classList.add('hide')
    }
}

//DESKTOP HOME NAVIGATION COMPANY SUBNAV HIDE/SHOW //

const compSub = document.querySelector('#compsubnav')
const compShow = document.querySelector('#compshow')


compShow.addEventListener('click',showSub)

function showSub(){
    if (compSub.classList.contains('hide')){
        compSub.classList.remove('hide')
        compSub.classList.add('show')
    }
    else{
        compSub.classList.remove('show')
        compSub.classList.add('hide')
    }

}

