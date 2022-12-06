function darkTheme() { 
    const body = document.body 

    const lightTheme = localStorage.getItem('darkTheme') == 'true' 
    localStorage.setItem('darkTheme', !lightTheme) 
    body.classList.toggle('darkTheme', !lightTheme)
};

document.querySelector('.btn').addEventListener('click', darkTheme);

function onload() {

    document.body.classList.toggle('darkTheme', localStorage.getItem('darkTheme') == 'true' )

}

document.addEventListener('DOMContentLoaded', onload)










var li = document.getElementsByTagName('li')
var cont = document.getElementById('content')

function mythings(content){
    let request = new XMLHttpRequest;
    request.open('GET', content, true)
    request.send()
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            cont.innerHTML=request.responseText
        }
    }
}
li[0].onclick = () => {
    mythings('sonc.html')
}

li[1].onclick = () => {
    mythings('anime.html')
}

li[2].onclick = () => {
    mythings('joke.html')
}
