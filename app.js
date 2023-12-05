let i = document.querySelector('#menuBar');
let ul = document.querySelector('.navBar');
let i2 = document.querySelector('#xMark');
let whiteMode = document.querySelector('.whiteColorChange');
let aElement = document.querySelectorAll('a')
let spanElement = document.querySelector('span')


i.addEventListener('click', e => {

    if (i.classList.contains('fa-bars')){
        i.classList.remove('fa-bars')
        i.classList.add('fa-xmark')
        ul.style.left = '0'
    } else {
        i.classList.remove('fa-xmark')
        i.classList.add('fa-bars')
        ul.style.left = '-100%'
    }

})

whiteMode.addEventListener('click', e => {

    document.body.style.transition = 'all 0.5s'
    document.body.style.backgroundColor = '#e0e0e0'
    i2.style.backgroundColor = 'black'
    ul.style.backgroundColor = '#f5f5f5'
    i.style.color = 'black'
    spanElement.style.color = 'black'
    aElement.forEach((e) => {
        e.style.color = 'black'
    })

    if (whiteMode.innerText === 'White Mode'){
        whiteMode.innerText = 'Dark Mode'
        if (whiteMode.innerText === 'Dark Mode'){

            document.body.style.backgroundColor = '#363636'
            i2.style.backgroundColor = 'white'
            ul.style.backgroundColor = '#232323'
            i.style.color= 'white'
            spanElement.style.color = 'white'
            aElement.forEach(e => {
                e.style.color = 'white'
            })
        }
    } else {
        whiteMode.innerText = 'White Mode'
    }


})