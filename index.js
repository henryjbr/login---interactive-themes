function useLightTheme(){
    document.body.style.background = 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
}

function useDarkTheme(){
    document.body.style.background =  'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
}


let lightBtn = document.getElementById('lightBtn').addEventListener('click', useLightTheme)
let darkBtn = document.getElementById('darkBtn').addEventListener('click', useDarkTheme)


